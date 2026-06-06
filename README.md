# Professional Vue Portfolio Template

[![Build and publish portfolio image](https://github.com/mm-saiful6854/portfolio-md-saiful-islam/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/mm-saiful6854/portfolio-md-saiful-islam/actions/workflows/docker-publish.yml)
[![Vue 3](https://img.shields.io/badge/Vue-3-42b883?logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ed?logo=docker&logoColor=white)](https://www.docker.com/)
[![Nginx](https://img.shields.io/badge/Nginx-production-009639?logo=nginx&logoColor=white)](https://nginx.org/)

A professional, responsive portfolio template for software engineers and open-source developers. Update one structured data file with your information, then deploy the same portfolio through Docker, Oracle Cloud, Netlify, or another static hosting provider.

This repository currently showcases **Md Saiful Islam**, a senior backend and cloud engineer. Fork it and replace the content in [`src/data/profile.js`](src/data/profile.js) to make it yours.

## Why Use This Template?

- Resume-style portfolio with dedicated experience, projects, skills, achievements, and contact pages.
- Content is managed from one JavaScript data file instead of being repeated across Vue components.
- Responsive, accessible Vue 3 interface with reusable components.
- SEO-friendly page titles and descriptions.
- Production-ready multi-stage Docker image.
- Nginx handles static files, compression, caching, SPA routing, security headers, and health checks.
- GitHub Actions validates the application and publishes AMD64 and ARM64 images to Docker Hub.
- Deployable without installing Node.js on the production server.

## Technology Stack

| Area | Technology |
| --- | --- |
| Frontend | Vue 3, Vue Router, Vite |
| Icons | Iconify |
| Code quality | ESLint, Oxlint, Prettier |
| Container | Docker multi-stage build |
| Web server | Nginx |
| CI/CD | GitHub Actions, Docker Buildx |
| Deployment | Docker Hub, Oracle Cloud, Netlify |

## Portfolio Pages

- **Home:** Introduction, engineering focus, metrics, selected skills, and projects
- **Experience:** Professional timeline and technology stacks
- **Projects:** Reusable project cards
- **Skills:** Grouped technical capabilities
- **Achievements:** Education, certifications, awards, and open-source work
- **Contact:** Email, phone, LinkedIn, GitHub, location, and resume

## Quick Start

### Requirements

- Node.js `20.19+` or `22.12+`
- npm

### Clone and Run Locally

```bash
git clone https://github.com/mm-saiful6854/portfolio-md-saiful-islam.git
cd portfolio-md-saiful-islam
npm install
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173`.

### Quality Checks

```bash
npm run lint:check
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Make It Your Portfolio

Fork the repository, clone your fork, and update [`src/data/profile.js`](src/data/profile.js).

| Export | What to customize |
| --- | --- |
| `profile` | Name, role, summary, contact links, focus areas, metrics, and navigation |
| `experience` | Employers, roles, dates, responsibilities, outcomes, and stacks |
| `projects` | Project names, descriptions, categories, and technologies |
| `skillGroups` | Languages, frameworks, databases, infrastructure, and other skills |
| `achievements` | Open-source contributions, certifications, awards, and competitions |
| `education` | Institution, degree, result, dates, and location |

Replace the resume at:

```text
public/Md_Saiful_Islam_Resume_latest.pdf
```

Then update `profile.resumeUrl` with the new file name. Also update the default title and description in [`index.html`](index.html) and route metadata in [`src/router/index.js`](src/router/index.js).

For design changes, start with:

```text
src/assets/base.css
src/assets/main.css
```

## Run With Docker

The Docker image builds the Vue application in a Node.js stage, then copies only the production files into a lightweight Nginx image. The final container does not include Node.js, source code, or development dependencies.

Build and run with Docker Compose:

```bash
docker compose up -d --build
```

Open `http://localhost`. If port `80` is occupied:

```bash
PORT=8080 docker compose up -d --build
```

Useful commands:

```bash
docker compose ps
docker compose logs -f portfolio
docker compose down
```

### Why Nginx Is Included

You do not need to configure a separate web server just to run the portfolio. The image already provides:

- Vue Router fallback for direct page visits
- Gzip compression
- Long-lived caching for versioned static assets
- No-cache handling for `index.html`
- Baseline security headers
- A `/health` endpoint and Docker health check

## Publish to Docker Hub With GitHub Actions

The workflow at [`.github/workflows/docker-publish.yml`](.github/workflows/docker-publish.yml) runs on pull requests, pushes to `main`, version tags, and manual dispatches.

It performs:

1. Dependency installation, linting, and Vue production build
2. Multi-platform Docker builds for `linux/amd64` and `linux/arm64`
3. Docker Hub publishing for non-pull-request events

Add these GitHub repository secrets under **Settings > Secrets and variables > Actions**:

| Secret | Description |
| --- | --- |
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_TOKEN` | A Docker Hub personal access token with read/write permission |

Set the optional repository variable `DOCKERHUB_IMAGE` to your image name:

```text
your-dockerhub-username/portfolio
```

Published image tags include:

- `latest` from the default branch
- `sha-<commit>` for traceable deployments
- `1.0.0` and `1.0` from a Git tag such as `v1.0.0`

Create a release image:

```bash
git tag v1.0.0
git push origin v1.0.0
```

## Deploy on Oracle Cloud Without Cloning

The Oracle instance only needs Docker. It does not need Git, Node.js, npm, or this repository.

SSH into the instance, then pull and run your published image:

```bash
docker pull your-dockerhub-username/portfolio:latest

docker run -d \
  --name portfolio \
  --restart unless-stopped \
  -p 80:80 \
  your-dockerhub-username/portfolio:latest
```

Verify the deployment:

```bash
docker ps
docker inspect --format='{{.State.Health.Status}}' portfolio
curl http://127.0.0.1/health
```

To deploy a newer image:

```bash
docker pull your-dockerhub-username/portfolio:latest
docker rm -f portfolio

docker run -d \
  --name portfolio \
  --restart unless-stopped \
  -p 80:80 \
  your-dockerhub-username/portfolio:latest
```

Use a version tag instead of `latest` when you need reproducible deployments. See [`deploy/README.md`](deploy/README.md) for Oracle networking, image-only Compose, and HTTPS guidance.

## Deploy Free on Netlify

Netlify can build and host the Vue portfolio directly from your GitHub repository.

1. Push your customized portfolio to GitHub.
2. Sign in to [Netlify](https://www.netlify.com/) and select **Add new site > Import an existing project**.
3. Connect GitHub and select your repository.
4. Use these build settings:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |

5. Add a file named `public/_redirects` with this content so Vue Router pages work when opened directly:

```text
/* /index.html 200
```

6. Deploy the site. Netlify will rebuild it automatically after future pushes.

You can add a custom domain from the Netlify domain settings.

## Project Structure

```text
.
├── .github/workflows/          # Docker Hub CI/CD workflow
├── deploy/                     # Nginx and Oracle deployment files
├── public/                     # Public files and downloadable resume
├── src/
│   ├── assets/                 # Global styling
│   ├── components/             # Reusable portfolio components
│   ├── data/profile.js         # Main portfolio content
│   ├── router/                 # Vue routes and page metadata
│   └── views/                  # Portfolio pages
├── Dockerfile                  # Production multi-stage image
└── docker-compose.yml          # Local Docker deployment
```

## Contributing

Issues and pull requests are welcome. Useful contributions include accessibility improvements, new reusable sections, deployment examples, documentation fixes, and design refinements.

When contributing, run:

```bash
npm run lint:check
npm run build
```

## Support

If this template helps you build your portfolio, consider starring the repository. It helps other developers discover the project too.
