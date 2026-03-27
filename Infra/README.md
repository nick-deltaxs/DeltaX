# Infra

This folder contains infrastructure and deployment configurations for the DeltaX website.

## Docker Development

For containerized local development, use the provided Docker Compose setup.

### Prerequisites

- Docker 20.10+
- Docker Compose 2.0+

### Quick Start

```bash
# From the Infra directory
cd Infra

# Start the development environment
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop the environment
docker-compose down
```

### Services

- **app**: Next.js development server with hot reload
- **nginx** (optional): Reverse proxy for production-like setup

### Environment Variables

Copy `.env.example` from the Codebase directory and modify as needed:

```bash
cp ../Codebase/.env.example .env
```

### Volumes

The Docker setup mounts these volumes for development:
- `../Codebase:/app`: Source code with hot reload
- `/app/node_modules`: Isolated node_modules
- `/app/.next`: Next.js build output

### Production Build

For production builds with Docker:

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## Deployment

### Vercel (Recommended)

The easiest deployment method:

1. Connect your GitHub repo to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy on every push to main

### Self-Hosted

For self-hosted deployment:

```bash
# Build the production image
docker build -f Dockerfile.prod -t deltax-website .

# Run the container
docker run -p 3000:3000 deltax-website
```

## CI/CD

GitHub Actions workflows are located in `.github/workflows/`:

- `lint.yml`: Linting on pull requests
- `build.yml`: Build verification
- `deploy.yml`: Production deployment (requires setup)

## Configuration

| File | Purpose |
|------|---------|
| `Dockerfile` | Development container |
| `Dockerfile.prod` | Production container |
| `docker-compose.yml` | Local development stack |
| `nginx.conf` | Nginx reverse proxy config |

## Troubleshooting

### Port already in use

```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Container won't start

```bash
# Clean rebuild
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d
```

### Permission issues

```bash
# Fix file permissions
sudo chown -R $(id -u):$(id -g) ../Codebase
```
