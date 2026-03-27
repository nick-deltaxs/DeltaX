# Deployment Guide

This guide covers deployment options for the DeltaX website.

## Vercel (Recommended)

The easiest and most optimized deployment method.

### Automatic Deployment

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Vercel auto-deploys on every push to main

### Manual Setup

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login and deploy:
```bash
vercel login
vercel
```

3. For production:
```bash
vercel --prod
```

### Environment Variables

In Vercel dashboard, add:

| Variable | Value | Required |
|----------|-------|----------|
| `NEXT_PUBLIC_APP_URL` | Your domain | No |
| `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` | From Vercel | For analytics |

## Docker Deployment

### Production Build

From the `Infra` folder:

```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Self-Hosted Server

1. Build image:
```bash
docker build -f Dockerfile.prod -t deltax-website ..
```

2. Run container:
```bash
docker run -d -p 3000:3000 --name deltax deltax-website
```

3. With environment variables:
```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_APP_URL=https://yourdomain.com \
  --name deltax \
  deltax-website
```

## Static Export

For hosting on any static server:

1. Update `next.config.mjs`:
```javascript
const nextConfig = {
  output: 'export',
  distDir: 'dist',
}
```

2. Build:
```bash
npm run build
```

3. Deploy `dist/` folder to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static host

## Other Platforms

### Netlify

Connect GitHub repo via Netlify dashboard. Build settings:
- Build command: `npm run build`
- Publish directory: `.next` (or `dist` for static)

### Railway

```bash
railway login
railway init
railway up
```

### Render

Create new Web Service, connect GitHub repo. Settings:
- Build Command: `npm install && npm run build`
- Start Command: `npm start`

## Domain Configuration

### Vercel

Add custom domain in project settings. Vercel handles SSL automatically.

### Self-Hosted with Nginx

Example server block:

```nginx
server {
    listen 80;
    server_name deltax.dev www.deltax.dev;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable SSL with Certbot:
```bash
certbot --nginx -d deltax.dev -d www.deltax.dev
```

## Environment-Specific Settings

### Development
```bash
npm run dev
```

### Staging
```bash
# Build with staging env
cp .env.staging .env.local
npm run build
```

### Production
```bash
# Build optimized for production
NODE_ENV=production npm run build
```

## Health Checks

Add to `app/api/health/route.ts`:

```typescript
export async function GET() {
  return Response.json({ status: 'ok', timestamp: new Date().toISOString() });
}
```

## Monitoring

### Vercel
- Built-in analytics dashboard
- Error tracking via Integration

### Self-Hosted
Recommended tools:
- Uptime monitoring: UptimeRobot, Pingdom
- Error tracking: Sentry
- Logs: Datadog, Logtail

## Rollback

### Vercel
- Instant rollback in dashboard
- Or redeploy previous deployment

### Docker
```bash
# List previous images
docker images deltax-website

# Rollback to previous
docker stop deltax
docker rm deltax
docker run -d -p 3000:3000 deltax-website:previous-tag
```

## Troubleshooting

### Build Failures

Check:
- Node version (requires 20+)
- Environment variables set
- No TypeScript errors: `npx tsc --noEmit`

### Runtime Errors

Check:
- Logs: `docker logs deltax`
- Environment variables in container: `docker exec deltax env`

### Performance Issues

- Enable CDN caching
- Optimize images
- Check bundle size: `npm run analyze` (if configured)

## Security Checklist

Before production:

- [ ] Environment variables configured
- [ ] No secrets in code
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Dependencies up to date (`npm audit`)
- [ ] CSP headers set (if needed)
