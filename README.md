# Md Saiful Islam Portfolio

Professional Vue 3 portfolio for Md Saiful Islam, focused on senior backend engineering, fintech microservices, distributed systems, and cloud-native delivery.

## Local Development

```sh
npm install
npm run dev
```

## Production Build

```sh
npm run build
```

The portfolio builds to `dist/` and is served by Nginx in the Docker image.

## Quality Checks

```sh
npm run lint
npm run lint:check
```

## Content

Portfolio content lives in `src/data/profile.js`. Update that file when changing experience, projects, skills, achievements, contact links, or resume path.

The public resume file is served from:

```text
public/Md_Saiful_Islam_Resume_latest.pdf
```

## Docker Deployment

This repo includes a portfolio-only Docker image and delivery pipeline:

- Multi-stage Node build
- Vue portfolio served by Nginx
- SPA route fallback for direct route visits
- Static asset caching and gzip compression
- Embedded container health check
- Multi-architecture Docker Hub publishing through GitHub Actions

Build and start it locally:

```sh
docker compose up -d --build
```

The site is available on `http://localhost` by default. Use `PORT=8080 docker compose up -d --build` when port `80` is already occupied.

The GitHub Actions workflow publishes Docker Hub images on pushes to `main` and version tags. Oracle Cloud can pull and run the published image without cloning this repository.

See `deploy/README.md` for Docker Hub secrets, image tags, Oracle SSH deployment commands, updates, and HTTPS guidance.

WordPress is intentionally outside this repository and can be added later as an independent deployment.
