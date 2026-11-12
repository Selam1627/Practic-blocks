# Practic-blocks

A one-page practice website for a precast concrete block company.

> Status: project skeleton. Placeholder page only; features start with the first user story.

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
2. Optionally copy the environment file and adjust the values:
   ```bash
   cp .env.example .env
   ```

### Option A: VS Code DevContainer (recommended)

1. Open the folder in VS Code and choose **Dev Containers: Reopen in Container**.
   `npm install` runs automatically when the container is created.
2. In the VS Code terminal (inside the container):
   ```bash
   npm run dev        # http://localhost:5173
   npm run test:run   # run the tests once
   ```

### Option B: Docker Compose only

```bash
docker compose up -d --build                # start the container
docker compose exec app npm install         # first time only
docker compose exec app npm run dev         # http://localhost:5173 (Ctrl+C to stop)
docker compose exec app npm run test:run    # run the tests once
docker compose down                         # stop the container
```

## Scripts

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start the Vite dev server on port 5173   |
| `npm run build`      | Type-check and build for production      |
| `npm run preview`    | Preview the production build             |
| `npm run test`       | Run Vitest in watch mode                 |
| `npm run test:run`   | Run the tests once                       |
| `npm run type-check` | Type-check with `vue-tsc`                |

## Project structure

```
.devcontainer/      VS Code DevContainer config (uses docker-compose.yml)
src/                Application source (App.vue, main.ts, assets/)
tests/              Vitest tests (*.spec.ts)
Dockerfile          Node 24 development image
docker-compose.yml  Dev service; node_modules lives in a named volume
.env.example        Environment variable template
```

## Contributing

- Branches: `main` (production), `develop` (integration), `feature/<name>` (work branches created from `develop`).
- Never commit directly to `main`.
- No pull requests: validated features are merged into `develop` with `git merge --no-ff`, then `develop` is pushed.
- Releases: the maintainer merges `develop` into `main` with `git merge --no-ff`.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/).

See [CLAUDE.md](CLAUDE.md) for the full workflow.
