# dns.fe — Duhingeneza Shop

Frontend for Duhingeneza Shop, built with [Next.js](https://nextjs.org) and Tailwind CSS. The API lives in [dns.be](https://github.com/Corenegasore123/dns.be).

## Requirements

- Node.js 24+
- npm

## Development

```bash
npm ci
npm run dev          # http://localhost:3000
npm run lint
npm run build        # production build (also type-checks)
```

## Docker

```bash
docker compose up -d --build   # http://localhost:3000
docker compose down
```

The [Dockerfile](Dockerfile) builds Next.js in [standalone mode](https://nextjs.org/docs/app/api-reference/config/next-config-js/output) and runs only the standalone server plus static assets, as the non-root `node` user.

## CI

GitHub Actions ([.github/workflows/ci.yml](.github/workflows/ci.yml)) runs lint and a production build on every pull request and push to `main`, then builds the Docker image and smoke-tests the running container.

## Workflow

Never commit directly to `main`. Create a feature branch (`feat/...`, `fix/...`), open a pull request, and merge once CI passes.
