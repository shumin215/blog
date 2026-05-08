# Phase 2: Content Processor

Use this phase to convert `/tmp/wp-migration/post.json` into one Astro-compatible
MDX file and a set of public image assets.

## Inputs

- `/tmp/wp-migration/post.json`
- `/tmp/wp-migration/images/`

## Outputs

- `/tmp/wp-migration/{YYYY-MM-DD}-{slug}.mdx`
- `/tmp/wp-migration/output.mdx` may be used as an intermediate copy
- `/tmp/wp-migration/public-images/`

## Prepare

Create the output image directory:

```powershell
New-Item -ItemType Directory -Force /tmp/wp-migration/public-images
```

## HTML To Markdown

Prefer `pandoc` when available:

```bash
pandoc -f html -t markdown_strict --wrap=none
```

If `pandoc` is unavailable, use a structured HTML parser when possible. Fall back
to regex only for simple tags such as headings, paragraphs, emphasis, links,
inline code, code blocks, lists, and blockquotes.

Preserve fenced code block languages when WordPress HTML exposes
`language-{name}` classes.

Review complex Gutenberg blocks, tables, embeds, galleries, captions, and custom
shortcodes manually. Convert tables and embeds when the meaning is clear. Remove
WordPress shortcodes such as `[gallery]` or `[caption]` only when no useful
content would be lost, and record which shortcodes were removed.

## Images

Use `local_images` from `post.json` to remap WordPress upload images:

- original: `https://domain/wp-content/uploads/2024/01/image.jpg`
- MDX path: `/images/2024/01/image.jpg`
- copied file: `/tmp/wp-migration/public-images/2024/01/image.jpg`

External images outside `wp-content/uploads` should stay as their original URLs.

Preserve meaningful `alt` text and captions. Prefer `ImageCaption` when a
WordPress caption has useful text.

For `srcset`, choose the best local image for the rendered Markdown image, usually
the original or largest referenced asset. Avoid duplicate rendered images from
both `src` and `srcset`.

If the destination public path already exists, compare the file size or hash
before overwriting. If it differs, choose a collision-free filename or ask the
user.

## Frontmatter

Generate Astro frontmatter that matches `src/content.config.ts`.

Required:

```yaml
---
title: "Post title"
date: 2024-01-15
description: "Short summary"
tags: ["tag1", "tag2"]
---
```

Rules:

- Escape double quotes inside `title` and `description`.
- Use `YYYY-MM-DD` for `date`; remove time.
- Use the WordPress excerpt for `description` when present.
- If excerpt is empty, remove HTML from the body and use the first useful
  sentence or about 150 characters.
- Combine WordPress tags and categories.
- Add important keywords from headings, bold text, inline code, or repeated
  technical terms when helpful.
- Normalize English tags to lowercase, preserve Korean tags, and replace spaces
  with `-`.
- Keep 2 to 10 tags.
- Only set `category` if it matches one of the enum values in
  `src/content.config.ts`: `AI`, `Computer Architecture`, `Programming`,
  `Digital Logic`, `NAS`, or `Series`.

## File Name

Use:

```text
{YYYY-MM-DD}-{slug}.mdx
```

Example:

```text
/tmp/wp-migration/2024-01-15-my-post-slug.mdx
```

## Validation

Before handing off:

- Confirm required frontmatter fields exist.
- Confirm image paths intended for local assets start with `/images/`.
- Confirm copied images exist under `/tmp/wp-migration/public-images/`.
- Confirm fenced code blocks are balanced.
- Confirm removed shortcodes are listed in the summary.
- Check for raw HTML that should have been converted.

Return the generated MDX path, image count, and removed shortcode list.
