# Docker Hub and Oracle Cloud Deployment

GitHub Actions builds the portfolio image and publishes it to Docker Hub. The Oracle Cloud instance only needs Docker and does not need a clone of this repository.

## 1. Configure Docker Hub

Create a Docker Hub repository named:

```text
portfolio-md-saiful-islam
```

Create a Docker Hub personal access token with read/write permission.

## 2. Configure GitHub

In the GitHub repository, open **Settings > Secrets and variables > Actions**.

Add these repository secrets:

| Secret | Value |
| --- | --- |
| `DOCKERHUB_USERNAME` | Docker Hub username |
| `DOCKERHUB_TOKEN` | Docker Hub personal access token |

The workflow publishes to `mm-saiful6854/portfolio-md-saiful-islam` by default. If the Docker Hub username or repository name differs, add this repository variable:

| Variable | Example value |
| --- | --- |
| `DOCKERHUB_IMAGE` | `your-dockerhub-user/portfolio-md-saiful-islam` |

The workflow at `.github/workflows/docker-publish.yml` runs quality checks and builds Linux AMD64 and ARM64 images.

Published tags:

- `latest` for pushes to `main`
- `sha-<commit>` for each published commit
- Semantic version tags such as `1.0.0` and `1.0` when pushing a Git tag such as `v1.0.0`

## 3. Trigger the Pipeline

Push to `main`:

```sh
git push origin main
```

Or publish a version:

```sh
git tag v1.0.0
git push origin v1.0.0
```

The image appears in Docker Hub after the GitHub Actions workflow succeeds.

## 4. Run on Oracle Cloud Without Cloning

SSH into the Oracle Cloud instance:

```sh
ssh -i ~/.ssh/oracle-key ubuntu@ORACLE_PUBLIC_IP
```

For a public Docker Hub repository, run:

```sh
docker pull mm-saiful6854/portfolio-md-saiful-islam:latest
docker run -d \
  --name portfolio \
  --restart unless-stopped \
  -p 80:80 \
  mm-saiful6854/portfolio-md-saiful-islam:latest
```

For a private Docker Hub repository, log in before pulling:

```sh
docker login --username YOUR_DOCKERHUB_USERNAME
```

Verify the deployment:

```sh
docker ps
docker inspect --format='{{.State.Health.Status}}' portfolio
curl http://127.0.0.1/health
```

## 5. Deploy a New Image

After a new image is published:

```sh
docker pull mm-saiful6854/portfolio-md-saiful-islam:latest
docker rm -f portfolio
docker run -d \
  --name portfolio \
  --restart unless-stopped \
  -p 80:80 \
  mm-saiful6854/portfolio-md-saiful-islam:latest
```

For reproducible releases, replace `latest` with a version such as `1.0.0`.

## Optional Image-Only Compose Deployment

If Docker Compose is preferred, transfer only `deploy/docker-compose.oracle.yml` to the server. The source repository is not required.

```sh
docker compose -f docker-compose.oracle.yml up -d
```

Override the image or port when needed:

```sh
PORTFOLIO_IMAGE=your-user/portfolio-md-saiful-islam:1.0.0 PORT=8080 \
  docker compose -f docker-compose.oracle.yml up -d
```

## Oracle Networking and HTTPS

- Open inbound TCP port `80` in the Oracle Cloud security list and VM firewall.
- Open port `443` when adding HTTPS.
- Point the portfolio domain A record to the Oracle public IP.
- For HTTPS, place Cloudflare, Caddy, or a host-level Nginx reverse proxy in front of the container.
- When using a host-level reverse proxy, publish the container on `127.0.0.1:8080:80` instead of exposing it publicly.
