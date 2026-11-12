# Practic-blocks

A one-page practice website for a precast concrete block company.

> Status: project setup. No application code yet.

## Tech stack

| Area        | Tool                          |
| ----------- | ----------------------------- |
| Framework   | Vue 3 (Composition API, `<script setup>`) |
| Language    | TypeScript                    |
| Build tool  | Vite                          |
| Styling     | Tailwind CSS                  |
| Testing     | Vitest                        |
| Environment | DevContainer (Docker)         |

## Prerequisites

- [Docker](https://www.docker.com/) (Docker Desktop on Windows/macOS)
- [VS Code](https://code.visualstudio.com/) with the **Dev Containers** extension

All other tooling (Node.js, npm, etc.) runs inside the container.

## Getting started

1. Clone the repository and switch to the integration branch:
   ```bash
   git clone https://github.com/Selam1627/Practic-blocks.git
   cd Practic-blocks
   git checkout develop
   ```
2. Open the folder in VS Code and choose **Dev Containers: Reopen in Container**.
3. Once the container is built, install dependencies and start the dev server:
   ```bash
   npm install
   npm run dev
   ```

## Planned scripts

These will be available once the project is scaffolded:

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |
| `npm run test`    | Run unit tests with Vitest           |

## Contributing

- Branches: `main` (production), `develop` (integration), `feature/<name>` (work branches created from `develop`).
- Never commit directly to `main`.
- No pull requests: validated features are merged into `develop` with `git merge --no-ff`, then `develop` is pushed.
- Releases: the maintainer merges `develop` into `main` with `git merge --no-ff`.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/).

See [CLAUDE.md](CLAUDE.md) for the full workflow.
