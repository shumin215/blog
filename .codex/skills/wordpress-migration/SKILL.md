---
name: wordpress-migration
description: Migrate a single legacy WordPress post from the Synology NAS WordPress instance into this Astro blog as MDX, including metadata, tags/categories, referenced images, build validation, branch creation, commit, push, and PR creation. Use when the user mentions WordPress migration, legacy posts, NAS WordPress content, importing posts, converting WordPress HTML to Astro MDX, or creating a migration PR.
---

# WordPress Migration

Use this skill to reproduce the old `.claude/agents/` WordPress migration
pipeline in Codex. The Claude setup split the process into three sub-agents;
Codex should treat them as three explicit workflow phases.

## Workflow

1. **Read the WordPress post**: collect metadata, HTML body, terms, and referenced
   upload images from the Synology NAS WordPress instance.
2. **Convert to Astro MDX**: transform HTML to Markdown/MDX, generate frontmatter,
   remap WordPress upload images to `/images/...`, and validate the result.
3. **Apply and PR**: copy the MDX and images into the repo, run the build, commit
   on `feat/migrate-{slug}`, push, and create a PR.

## References

Load only the file needed for the current phase:

- `references/wp-reader.md`: use when selecting or extracting a WordPress post.
- `references/content-processor.md`: use when converting extracted post data into
  Astro MDX and public image assets.
- `references/migration-pr.md`: use when applying converted files to the repo,
  validating, committing, pushing, and opening a PR.

The original Claude prompts remain in `.claude/agents/*.md`. Prefer the Codex
references above for day-to-day work; use `.claude/agents/*.md` only when checking
source parity.

## Guardrails

- Ask for a post ID, slug, or title if the user has not provided a target.
- If the target slug already exists as `.md` or `.mdx` under `src/content/posts/`,
  warn the user and continue only after they confirm overwrite or choose a
  different target.
- Never print database passwords, tokens, SSH private key contents, or secret
  values.
- Redact secrets from command errors before summarizing them.
- Copy only images referenced by the target post. Do not copy the full WordPress
  uploads directory.
- Keep temporary artifacts under `/tmp/wp-migration/` unless the user asks to
  remove them.
- Validate frontmatter against `src/content.config.ts`.
- Run `npm run build` before creating a commit or PR.
- Do not create a migration PR if the build fails.
- Ask for confirmation before branch changes, SSH/network reads, `git push`, or
  `gh pr create` when the action has not already been explicitly requested.
- Preserve unrelated local changes; check `git status --short` before branch,
  copy, commit, or push operations.

## Output

At the end of a migration, report:

- migrated post title, date, and slug
- MDX file path
- number of copied or remapped images
- validation result
- branch name and PR URL, if created
