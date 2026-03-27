# Getting Started

This guide will help you set up the DeltaX website for local development.

## Prerequisites

- **Node.js** 20 or higher ([download](https://nodejs.org/))
- **npm** 10+ (comes with Node.js)
- **Git** ([download](https://git-scm.com/))

Optional:
- **Docker** & **Docker Compose** (for containerized development)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/deltax-team/deltax-website.git
cd deltax-website/Codebase
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` if you need to configure any environment variables. For basic development, the defaults should work.

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker Development

For a containerized environment:

```bash
cd ../Infra
docker-compose up -d
```

The app will be available at http://localhost:3000 with hot reload enabled.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Start production server (after build) |
| `npm run lint` | Run ESLint to check code |

## IDE Setup (VS Code)

Recommended extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Troubleshooting

### Port 3000 already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

Or use a different port:
```bash
npm run dev -- --port 3001
```

### Node version issues

Use nvm to manage Node versions:
```bash
nvm use 20
```

### Dependency issues

Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

- Read about [project architecture](architecture.md)
- Learn about [deployment options](deployment.md)
- Check [contributing guidelines](../CONTRIBUTING.md)
