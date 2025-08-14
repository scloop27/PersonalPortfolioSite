# Advait Paliwal Portfolio - Replit Project Guide

## Overview

This is a modern portfolio website for Advait Paliwal, a 21-year-old founder and entrepreneur. The site showcases his projects, experience, interests, and thoughts through a clean, minimal design. It's built as a full-stack application with React frontend and Express backend, ready for deployment on Replit.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and dark theme
- **Animations**: Framer Motion for page transitions and staggered reveals
- **Build Tool**: Vite for fast development and optimized builds
- **Static Data**: Blog posts managed via TypeScript data files with optional featured image support
- **Image Management**: Organized folder structure for all site images with upload guides

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

## Key Components

### Database Layer
- **ORM**: Drizzle with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Migrations**: Auto-generated in `./migrations` directory
- **Current Schema**: Basic user table with username/password fields

### Storage Interface
- **Interface**: `IStorage` in `server/storage.ts`
- **Implementation**: Currently using in-memory storage (`MemStorage`)
- **Methods**: User CRUD operations (getUser, getUserByUsername, createUser)
- **Future**: Will be replaced with Drizzle-based database storage

### UI Components
- **Design System**: Clean, minimal portfolio design
- **Color Scheme**: Charcoal, medium gray, and pure white
- **Typography**: SF Pro Display font family
- **Components**: Fully accessible Radix UI components styled with Tailwind

### Navigation Structure
- **About** (`/`) - Hero section and project showcase
- **Experience** (`/experience`) - Professional timeline
- **Interests** (`/interests`) - Technical and personal interests
- **Playbook** (`/playbook`) - Blog posts from Substack RSS feed

## Data Flow

### Development Flow
1. Vite dev server handles frontend assets and HMR
2. Express server serves API routes under `/api` prefix
3. Frontend uses TanStack Query for API communication
4. Database operations go through the storage interface

### Production Flow
1. Frontend builds to `dist/public` directory
2. Backend builds to `dist/index.js` using esbuild
3. Express serves static files and API routes
4. PostgreSQL handles persistent data storage

## External Dependencies

### Core Dependencies
- **Database**: `@neondatabase/serverless` for PostgreSQL connection
- **ORM**: `drizzle-orm` and `drizzle-kit` for database operations
- **UI**: `@radix-ui/*` components with `tailwindcss` styling
- **Routing**: `wouter` for client-side routing
- **Forms**: `react-hook-form` with `@hookform/resolvers`

### Development Tools
- **Build**: `vite` for frontend, `esbuild` for backend
- **TypeScript**: Full type safety across the stack
- **Replit Integration**: Custom plugins for development experience

## Deployment Strategy

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Run Command**: `npm run dev` for development
- **Build Command**: `npm run build` for production
- **Start Command**: `npm run start` for production server

### Environment Setup
- **DATABASE_URL**: Required environment variable for PostgreSQL connection
- **Port Configuration**: Backend runs on port 5000, exposed as port 80
- **Auto-scaling**: Configured for Replit's autoscale deployment target

### Database Deployment
- Run `npm run db:push` to sync schema changes to database
- Database migrations are handled automatically by Drizzle
- Connection pooling managed by Neon Database

## Changelog

- June 24, 2025: Initial setup
- June 24, 2025: Added Founder's Playbook page with RSS feed integration
- June 24, 2025: Converted Playbook to clean blog listing page matching user design requirements
- June 24, 2025: Implemented infinite scroll functionality for blog posts with pagination support
- June 24, 2025: Removed Thoughts section and optimized responsive design for all form factors
- June 24, 2025: Updated font family to SF Pro Display across the entire site
- June 24, 2025: Added comprehensive code documentation and technical guides
- June 24, 2025: Refined codebase with detailed comments and structure documentation
- June 24, 2025: Made View buttons clickable with placeholder links and created comprehensive content update guide
- June 25, 2025: Migrated from Replit Agent to standard Replit environment
- June 25, 2025: Converted from full-stack to static React portfolio
- June 25, 2025: Removed backend dependencies and created static blog data system
- June 25, 2025: Added editable blog posts in client/src/data/blogPosts.ts with Substack links
- June 25, 2025: Enhanced mobile responsiveness across all components with flexible alignment
- June 25, 2025: Added mobile-first responsive design with clamp() typography and touch-friendly interactions
- June 25, 2025: Applied buildspace.so inspired dark color scheme with white accents
- June 25, 2025: Added glassy navigation effect with backdrop blur and transparency
- June 25, 2025: Enhanced project mockups with gradient overlays for improved text contrast and visual depth
- June 25, 2025: Added comprehensive guide comments throughout codebase and created CONTENT_MANAGEMENT_GUIDE.md
- June 25, 2025: Added navigation bar to Playbook section with glassy backdrop effect
- June 25, 2025: Enhanced blog post management system with comprehensive add/edit/delete guides
- June 25, 2025: Improved Playbook section alignment with better spacing and typography
- June 25, 2025: Added future-proofing for blog posts with empty state handling and responsive layout
- June 25, 2025: Optimized project for Vercel hosting with vercel.json configuration
- June 25, 2025: Created VERCEL_DEPLOYMENT_GUIDE.md with comprehensive deployment instructions
- June 25, 2025: MIGRATION COMPLETION - Successfully migrated from Replit Agent to standard Replit environment
- June 25, 2025: Fixed Tailwind CSS content paths for proper styling compilation in production builds
- June 25, 2025: Updated site title from "Advait Paliwal" to "Shiva Charan" and added custom favicon
- June 25, 2025: Created COMPLETE_CONTENT_GUIDE.md with comprehensive documentation for all content updates
- June 25, 2025: Added detailed inline comments throughout codebase for easy content management
- June 25, 2025: Enhanced About page with detailed project editing guide and mockup instructions
- June 25, 2025: Enhanced Experience page with comprehensive work history editing guide
- June 25, 2025: Enhanced blog posts system with detailed add/edit/delete documentation
- June 25, 2025: Enhanced Navigation component with detailed guide for adding/editing menu items
- June 26, 2025: MIGRATION COMPLETION - Successfully migrated portfolio from Replit Agent to standard Replit environment while maintaining Vercel deployment compatibility
- August 14, 2025: COMPREHENSIVE IMAGE MANAGEMENT SYSTEM - Created organized image folder structure with dedicated directories for projects, experience, interests, blog, and general images
- August 14, 2025: Enhanced all pages with proper image upload capabilities and comprehensive documentation guides
- August 14, 2025: Updated project images to use new organized structure (/images/projects/) with generated placeholder images for missing projects
- August 14, 2025: Added featuredImage support to blog posts with optional image field in BlogPost interface
- August 14, 2025: COMPREHENSIVE IMAGE MANAGEMENT SYSTEM - Created organized image folder structure with dedicated directories for projects, experience, interests, blog, and general images
- August 14, 2025: Enhanced all pages with proper image upload capabilities and comprehensive documentation guides
- August 14, 2025: Updated project images to use new organized structure (/images/projects/) with generated placeholder images for missing projects
- August 14, 2025: Replaced hardcoded CSS mockups with actual image displays throughout About page
- August 14, 2025: Added company logo support to Experience page with detailed image management guides
- August 14, 2025: Updated all page footers to match About page - consistent social media links across the entire site

## User Preferences

- **Communication Style**: Simple, everyday language
- **Code Quality**: Comprehensive documentation and comments preferred
- **Typography**: SF Pro Display font family for native Apple experience
- **Design Approach**: Clean, minimal, responsive-first design
- **Development**: TypeScript-first with proper error handling
- **Content Management**: Detailed inline comments and comprehensive guides for all content updates
- **Site Owner**: Shiva Charan (updated from Advait Paliwal)
- **Documentation**: Extensive commenting throughout codebase with step-by-step editing instructions