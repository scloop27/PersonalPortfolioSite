# Technical Documentation - Advait Paliwal Portfolio

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Setup & Installation](#setup--installation)
4. [Development Workflow](#development-workflow)
5. [API Documentation](#api-documentation)
6. [Troubleshooting Guide](#troubleshooting-guide)
7. [Performance Optimization](#performance-optimization)
8. [Deployment](#deployment)

## Project Overview

A modern, responsive portfolio website built for Advait Paliwal (21-year-old founder and entrepreneur). The site features:

- **About Page**: Hero section with project showcase
- **Experience Page**: Professional timeline with visual elements
- **Interests Page**: Technical and personal interests (placeholder)
- **Playbook Page**: Dynamic blog posts from Substack RSS feed with infinite scroll

### Key Features
- **Responsive Design**: Optimized for phones, tablets, and desktops
- **RSS Integration**: Live blog posts from Substack
- **Infinite Scroll**: Automatic loading of additional posts
- **Cache Management**: Manual refresh capability for latest content
- **Modern UI**: SF Pro Display typography with clean design

## Architecture

### Frontend Stack
```
React 18 + TypeScript
├── Wouter (routing)
├── TanStack Query (server state)
├── Framer Motion (animations)
├── Tailwind CSS (styling)
├── Shadcn/ui (components)
└── Vite (build tool)
```

### Backend Stack
```
Node.js + Express
├── RSS Parser (blog content)
├── TypeScript (type safety)
├── Drizzle ORM (database)
└── Neon PostgreSQL (database)
```

### Project Structure
```
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # Shadcn components
│   │   │   ├── Navigation.tsx
│   │   │   └── PlaybookPostCard.tsx
│   │   ├── pages/         # Route components
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Interests.tsx
│   │   │   └── Playbook.tsx
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and configurations
│   │   └── main.tsx       # App entry point
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data storage interface
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
│   └── schema.ts        # Database schema definitions
└── package.json         # Dependencies and scripts
```

## Setup & Installation

### Prerequisites
- Node.js 20+
- PostgreSQL database (Neon recommended)

### Environment Variables
```env
DATABASE_URL=postgresql://user:password@host:port/database
```

### Installation Steps
```bash
# Install dependencies
npm install

# Set up database (if using PostgreSQL)
npm run db:push

# Start development server
npm run dev
```

### Development Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Sync database schema

## Development Workflow

### Adding New Pages
1. Create component in `client/src/pages/`
2. Add route to `client/src/App.tsx`
3. Update navigation in `client/src/components/Navigation.tsx`

### Creating Components
1. Place in `client/src/components/`
2. Use TypeScript interfaces for props
3. Follow naming convention: PascalCase

### API Development
1. Add routes to `server/routes.ts`
2. Use storage interface for data operations
3. Implement proper error handling

## API Documentation

### GET /api/playbook-feed
Fetches paginated blog posts from Substack RSS feed.

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Posts per page (default: 6)

**Response:**
```json
{
  "posts": [
    {
      "title": "Post Title",
      "contentSnippet": "Post excerpt...",
      "pubDate": "2024-12-15",
      "link": "https://..."
    }
  ],
  "hasMore": true,
  "currentPage": 1,
  "totalPosts": 25
}
```

### GET /api/substack-feed
Fetches posts for Thoughts page (legacy endpoint).

## Troubleshooting Guide

### Common Issues & Solutions

#### 1. RSS Feed Not Loading
**Symptoms:** Posts not appearing, error in console
**Solutions:**
```bash
# Check if Substack URL is accessible
curl -I "https://shivacharanmandhapuram.substack.com/feed"

# Clear cache and refresh
# Use refresh button in UI or restart server
```

#### 2. Infinite Scroll Not Working
**Symptoms:** No additional posts loading on scroll
**Debug Steps:**
1. Check browser console for errors
2. Verify `hasNextPage` in React Query dev tools
3. Check scroll event listeners

#### 3. Responsive Design Issues
**Symptoms:** Layout broken on mobile/tablet
**Solutions:**
- Verify Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- Test with browser dev tools device emulation
- Check viewport meta tag in HTML

#### 4. Font Not Loading
**Symptoms:** Fallback font being used instead of SF Pro Display
**Solutions:**
- SF Pro Display is a system font (Apple devices only)
- Check font fallback chain in CSS
- Verify Tailwind font configuration

### Error Debugging Prompts

When encountering issues, provide this information to AI:

```
Issue: [Brief description]
Error Message: [Exact error from console]
Environment: [Development/Production]
Browser: [Chrome/Safari/Firefox version]
Steps to Reproduce: [What you did]
Expected Behavior: [What should happen]
Current Behavior: [What actually happens]
```

### Performance Issues
```
Page Load Time: [Specific timing]
Bundle Size: [If known]
Network Tab: [Key requests and timings]
Memory Usage: [If relevant]
```

### Build/Deployment Issues
```
Build Command: [Exact command used]
Error Output: [Complete error message]
Environment: [Node version, OS]
Dependencies: [Any recent changes]
```

## Performance Optimization

### Current Optimizations
- **Code Splitting**: Automatic with Vite
- **Image Optimization**: WebP format with fallbacks
- **Caching**: TanStack Query with 30-second stale time
- **Bundle Size**: Tree shaking enabled
- **CSS**: Tailwind purging unused styles

### Monitoring
- Use browser dev tools Performance tab
- Monitor bundle size with `npm run build`
- Check Core Web Vitals in production

## Deployment

### Replit Deployment (Recommended)
1. Ensure `replit.md` is updated
2. Run `npm run build` to verify production build
3. Use Replit's deploy button
4. Configure custom domain if needed

### Environment Configuration
- **Development**: Port 5000, hot reload enabled
- **Production**: Port 80, static file serving
- **Database**: PostgreSQL with connection pooling

### Pre-deployment Checklist
- [ ] All tests passing
- [ ] No console errors
- [ ] RSS feed working
- [ ] Responsive design verified
- [ ] Performance acceptable
- [ ] Environment variables set

## Code Style Guidelines

### TypeScript
- Use interfaces for component props
- Enable strict mode
- Prefer type inference where possible

### React
- Use functional components with hooks
- Implement proper error boundaries
- Follow React Query patterns for data fetching

### CSS/Tailwind
- Use responsive design patterns
- Prefer Tailwind utilities over custom CSS
- Maintain consistent spacing scale

### Git Workflow
- Feature branches for new development
- Descriptive commit messages
- Regular pushes to prevent data loss

## Support & Maintenance

### Regular Tasks
- Update dependencies monthly
- Monitor RSS feed reliability
- Review performance metrics
- Backup database regularly

### Emergency Procedures
- RSS feed failure: Check Substack status
- Server down: Restart via Replit console
- Database issues: Check connection string
- Build failures: Clear node_modules and reinstall

---

For additional help, refer to `replit.md` for project-specific context and decisions.