# Phase 3: Migration PR

Use this phase to copy converted migration output into the Astro blog repo,
validate it, commit it, push a branch, and open a PR.

## Inputs

- `/tmp/wp-migration/post.json`
- `/tmp/wp-migration/*.mdx`
- `/tmp/wp-migration/public-images/`

## Destination

- Post files: `src/content/posts/`
- Public images: `public/images/`

## Preconditions

Start in the repository root and inspect local state:

```powershell
git status --short
```

If unrelated changes exist, preserve them. Do not switch branches, pull, copy
over files, or commit in a way that would disturb unrelated work without user
confirmation.

Confirm the target branch name:

```text
feat/migrate-{slug}
```

If that branch already exists locally or remotely, ask before reusing or
recreating it.

Ask before running branch-changing commands, pushing to the remote, or opening a
PR unless the user already explicitly requested those actions in the current
task.

## Apply Files

Copy the generated MDX file into `src/content/posts/`. Record the exact
destination path.

If `/tmp/wp-migration/public-images/` contains files, copy its contents into
`public/images/` while preserving year/month subdirectories. Record every exact
destination path.

Do not remove `/tmp/wp-migration/`; leave it for inspection unless the user asks
to clean up.

## Validate

Run:

```powershell
npm run build
```

If build fails:

- inspect the error
- fix MDX/frontmatter/image path issues when possible
- rerun the build
- stop before commit or PR if the build cannot be made green

## Commit

Stage only the exact files copied for this migration. Do not stage whole
directories, because unrelated content changes may already exist.

```powershell
git add src/content/posts/{generated-file}.mdx public/images/{copied-image}
```

Do not stage `.codex/`, `AGENTS.md`, `.claude/`, or unrelated content while
creating a migration commit.

Use a Conventional Commit message:

```text
feat: migrate WordPress post '{title}'

- Post: {title} ({date})
- Slug: {slug}
- HTML to MDX conversion complete
```

Do not include Claude-specific co-author trailers in Codex commits unless the
user requests them.

## Push And PR

Push:

```powershell
git push -u origin feat/migrate-{slug}
```

Create the PR with `gh pr create` when GitHub CLI is available. Suggested title:

```text
feat: migrate '{title}'
```

Suggested body:

```markdown
## Migration Post

| Item | Value |
|------|-------|
| Title | {title} |
| Date | {date} |
| Slug | {slug} |
| Tags | {tags} |

## Changes

- Added one MDX post
- Copied referenced images when present
- Generated Astro frontmatter
- Verified production build

## Test Plan

- [x] `npm run build`
- [ ] Check the Cloudflare Pages preview
- [ ] Confirm images render
- [ ] Confirm code blocks render
```

If PR creation succeeds, return the PR URL. If it fails, report the branch name
and the exact next command needed.
