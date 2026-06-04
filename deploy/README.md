# Oracle Cloud Docker Deployment

This project is set up for two separate domains:

- `portfolio-domain.com` serves the Vue portfolio.
- `blog-domain.com` serves the WordPress blog.

## First Setup

1. Point both domain A records to the Oracle Cloud instance public IP.
2. Open ports `80` and `443` in the Oracle Cloud security list and on the VM firewall.
3. Copy `.env.example` to `.env` and set strong database passwords.
4. Replace `portfolio-domain.com` and `blog-domain.com` in `deploy/nginx/conf.d/default.conf`.
5. Start the services:

```sh
docker compose up -d --build
```

## HTTPS With Certbot

After DNS is pointing to the server and the HTTP config is running:

```sh
docker compose --profile tools run --rm certbot certonly --webroot -w /var/www/certbot -d portfolio-domain.com -d www.portfolio-domain.com
docker compose --profile tools run --rm certbot certonly --webroot -w /var/www/certbot -d blog-domain.com -d www.blog-domain.com
```

Then replace `deploy/nginx/conf.d/default.conf` with the content from `deploy/nginx/conf.d/ssl.conf.example`, update the domain names, and reload:

```sh
docker compose restart nginx-proxy
```

Renew certificates with:

```sh
docker compose --profile tools run --rm certbot renew
docker compose restart nginx-proxy
```
