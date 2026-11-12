# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

One-page practice website for a precast concrete block company.

**Stack:** Vue 3 + TypeScript + Vite + Tailwind CSS, tested with Vitest, developed inside a DevContainer (Docker).

- Use Vue 3 Composition API with `<script setup lang="ts">`.
- Style with Tailwind utility classes; avoid custom CSS unless necessary.
- Add or update Vitest tests alongside new components and logic.
- Run commands (npm, vite, vitest) inside the DevContainer.

## Git workflow

### Branches

| Branch           | Purpose                                         |
| ---------------- | ----------------------------------------------- |
| `main`           | Production. Only updated by the user merging `develop`. |
| `develop`        | Integration. Base for all feature branches.     |
| `feature/<name>` | New work. Created from `develop`, merged back into `develop` after user validation. |

### Rules

- **Never commit to, merge into, or push `main`.** Releases are done by the user.
- No pull requests. All merges are local with `git merge --no-ff`.
- Before starting work, branch from an up-to-date `develop`:
  ```bash
  git checkout develop
  git pull origin develop
  git checkout -b feature/<name>
  ```
- Use short kebab-case names: `feature/hero-section`, `feature/contact-form`.
- Do not force-push shared branches (`main`, `develop`).

### Merging a feature (Claude)

Only after the user has validated the feature:

```bash
git checkout develop
git pull origin develop
git merge --no-ff feature/<name>
git push origin develop
```

### Releasing (user only)

The user merges `develop` into `main` themselves:

```bash
git checkout main
git merge --no-ff develop
git push origin main
```

## Commit messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<optional scope>): <short description>

<optional body>

<optional footer>
```

**Types:**

| Type       | Use for                                      |
| ---------- | -------------------------------------------- |
| `feat`     | New feature                                  |
| `fix`      | Bug fix                                      |
| `docs`     | Documentation only                           |
| `style`    | Formatting, no code change                   |
| `refactor` | Code change that neither fixes nor adds      |
| `test`     | Adding or updating tests                     |
| `build`    | Build system or dependencies                 |
| `ci`       | CI configuration                             |
| `chore`    | Maintenance tasks                            |

**Guidelines:**

- Imperative mood, lowercase, no trailing period: `feat(hero): add call-to-action button`.
- Keep the subject line under 72 characters.
- Mark breaking changes with `!` (e.g. `feat!: ...`) or a `BREAKING CHANGE:` footer.
- One logical change per commit.
