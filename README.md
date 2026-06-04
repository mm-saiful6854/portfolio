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
```

## Content

Portfolio content lives in `src/data/profile.js`. Update that file when changing experience, projects, skills, achievements, contact links, or resume path.

The public resume file is served from:

```text
public/Md_Saiful_Islam_Resume_latest.pdf
```

## Docker Deployment

This repo includes a Docker setup for:

- Vue portfolio served by Nginx
- WordPress blog
- MariaDB database
- Nginx public reverse proxy
- Certbot volumes for HTTPS certificates

See `deploy/README.md` for Oracle Cloud setup, domain replacement, and HTTPS steps.
