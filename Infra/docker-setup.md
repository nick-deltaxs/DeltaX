# Docker Setup for DeltaX Landing

## Prerequisites
1. Install Docker Desktop for Windows from https://www.docker.com/products/docker-desktop
2. Start Docker Desktop (make sure it's running in the background)

## Quick Start

### Option 1: Development Mode (with hot reload)
```bash
# Start development container with hot reload
docker-compose --profile dev up deltax-dev
```

### Option 2: Production Mode
```bash
# Build and run production container
docker-compose up deltax-app
```

## Environment Setup
1. Make sure `Codebase/.env.local` exists with your API keys:
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (ask Arvin)
   - `SUPABASE_SERVICE_ROLE_KEY` (ask Arvin) 
   - `RESEND_API_KEY` (ask Ali)

## Access
- Development: http://localhost:3000
- Production: http://localhost:3000

## Docker Commands
```bash
# Build images
docker-compose build

# Stop containers
docker-compose down

# View logs
docker-compose logs -f

# Rebuild without cache
docker-compose build --no-cache
```

## Project Structure Analysis

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v3.4
- **Animation**: Framer Motion (domMax)
- **Database**: Supabase
- **Email**: Resend
- **Deploy**: Vercel

### Key Dependencies
- `@supabase/supabase-js`: Database client
- `framer-motion`: Animations
- `next`: React framework
- `react`: UI library
- `resend`: Email service
- `tailwindcss`: CSS framework

### Project Structure
```
DeltaX-Landing/
├── Codebase/           # Next.js application
│   ├── src/
│   │   ├── app/       # App Router pages
│   │   └── components/ # Reusable components
│   ├── public/        # Static assets
│   └── package.json   # Dependencies
├── Knowledge-Base/    # Design specs and docs
├── Prompts/          # Development prompts
└── Roadmap/          # Project planning
```

### Pages
1. Home - Hero, Problem, System, Engine sections
2. About - Team and company story  
3. Contact - Contact form
4. Legal - Privacy, Terms
5. 404 - Custom not-found page
