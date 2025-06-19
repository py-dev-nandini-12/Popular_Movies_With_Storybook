# Dual Deployment Guide

This repository can be deployed to two separate Vercel projects from the main branch:

## Deployment Setup

### 1. Movie App Deployment
- **Vercel Project Name**: `movie-app` (or your preferred name)
- **Build Command**: `npm run build-next` 
- **Output Directory**: `.next`
- **Framework**: Next.js
- **Config File**: Use `vercel-movie.json` settings

### 2. Storybook Deployment  
- **Vercel Project Name**: `movie-app-storybook` (or your preferred name)
- **Build Command**: `npm run build-storybook`
- **Output Directory**: `storybook-static` 
- **Framework**: Other/Static
- **Config File**: Use `vercel-storybook.json` settings

## Steps to Deploy

### Method 1: Using Vercel CLI
```bash
# Deploy movie app
vercel --prod --local-config vercel-movie.json

# Deploy storybook  
vercel --prod --local-config vercel-storybook.json
```

### Method 2: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Import your repository **twice** (create 2 projects)

**For Movie App Project:**
- Project Name: `movie-app`
- Build Command: `npm run build-next`
- Output Directory: `.next`
- Framework: Next.js

**For Storybook Project:**
- Project Name: `movie-app-storybook` 
- Build Command: `npm run build-storybook`
- Output Directory: `storybook-static`
- Framework: Other

## Environment Variables
Add your TMDB API key to the **movie app project** only:
```
TMDB_API_KEY=your_api_key_here
```

## Result
- **Movie App**: `https://movie-app.vercel.app`
- **Storybook**: `https://movie-app-storybook.vercel.app`

## Local Testing
```bash
# Test movie app build
npm run build-next && npm run start

# Test storybook build  
npm run build-storybook
# Then open storybook-static/index.html in browser
```
