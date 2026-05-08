# Phase 1: WordPress Reader

Use this phase to fetch one WordPress post from the Synology NAS and write
structured input for conversion.

## Connection

- SSH: `ssh -i ~/.ssh/blog_nas -p 2200 shumin@192.168.0.5`
- WordPress path: `/volume1/web/wp`
- MySQL socket: `/run/mysqld/mysqld10.sock`
- Database: `blog_wordpress`
- Database user: `root`
- Read the database password dynamically from `wp-config.php`; never print it.

## Target Selection

The user may specify:

- `ID: 42`
- `slug: my-post-slug`
- `title: partial title`

If no target is specified, list published posts and ask the user which one to
migrate.

Before querying WordPress content, compare the target slug with existing posts:

```powershell
Get-ChildItem src/content/posts -Include *.md,*.mdx -File -Recurse |
  ForEach-Object { $_.BaseName -replace '^\d{4}-\d{2}-\d{2}-', '' }
```

If a matching slug already exists, warn that migration may overwrite an existing
post and ask before continuing.

## Query Published Posts

Run over SSH after reading the database password on the remote host. Redact
passwords from all logs and summaries.

```bash
mysql -u root -p"$DB_PASSWORD" --default-character-set=utf8mb4 \
  -S /run/mysqld/mysqld10.sock blog_wordpress --batch --silent -e \
  "SELECT ID, post_name, post_title, post_date
   FROM wp_posts
   WHERE post_status='publish' AND post_type='post'
   ORDER BY post_date DESC;"
```

When showing a list to the user, mark already migrated slugs as `[done]`.

## Query One Post

Escape slug or title values before building SQL. Prefer ID lookup when possible.
If using slug or title, quote values through a MySQL-safe escaping method on the
remote host; do not paste raw user input into SQL.

Use ID when available:

```sql
SELECT ID, post_title, post_name, post_date, post_content, post_excerpt
FROM wp_posts
WHERE ID=42;
```

Use slug when provided, after escaping the value:

```sql
SELECT ID, post_title, post_name, post_date, post_content, post_excerpt
FROM wp_posts
WHERE post_name='my-post-slug';
```

Use title with a cautious escaped partial match only when ID and slug are
unavailable. If multiple posts match, show the candidates and ask the user to
choose one.

## Query Terms

```sql
SELECT t.name, tt.taxonomy
FROM wp_term_relationships tr
JOIN wp_term_taxonomy tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
JOIN wp_terms t ON tt.term_id = t.term_id
WHERE tr.object_id=POST_ID
  AND tt.taxonomy IN ('post_tag', 'category');
```

## Images

Extract only `wp-content/uploads` image URLs from the post body, including
`src`, `srcset`, linked original images, and common WordPress resized variants
such as `image-1024x768.jpg`. Copy each referenced file individually to
`/tmp/wp-migration/images/` using `scp`.

Do not include external images in `local_images`; keep those URLs unchanged for
the converter.

If two copied files share the same basename, preserve enough parent path
information to avoid collisions.

## Output

Write `/tmp/wp-migration/post.json`:

```json
{
  "id": 42,
  "title": "Post title",
  "slug": "post-slug",
  "date": "2024-01-15",
  "content": "<p>HTML body...</p>",
  "excerpt": "Summary",
  "tags": ["tag1", "tag2"],
  "categories": ["category1"],
  "local_images": {
    "/volume1/web/wp/wp-content/uploads/2024/01/image.jpg": "/tmp/wp-migration/images/image.jpg"
  }
}
```

Return a short summary with the title, slug, image count, and JSON path.
