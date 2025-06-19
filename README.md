# Movie App with Storybook

A modern, beautiful movie discovery app built with Next.js 15, React 19, TypeScript, and Storybook. Features top-rated movies from The Movie Database (TMDB) API with a stunning pastel design system.

## Features

- 🎬 Browse top-rated, popular, and now-playing movies
- 🎨 Beautiful pastel design with glassmorphism effects
- 📱 Fully responsive design
- 🔍 Movie search and filtering
- 📚 Complete Storybook documentation
- 🚀 Optimized for Vercel deployment
- ♿ Accessible UI components

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: React 19 with modern hooks
- **TypeScript**: Full type safety
- **Styling**: CSS-in-CSS with custom design tokens
- **Storybook**: Component documentation and testing
- **API**: The Movie Database (TMDB)

## Getting Started

First, set up your environment variables:

```bash
# Copy the example environment file
cp .env.example .env.local

# Add your TMDB API key
TMDB_API_KEY=your_api_key_here
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storybook

Run Storybook for component development and documentation:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view the Storybook.

## Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build both Next.js app AND Storybook for production
- `npm run build-next` - Build only the Next.js movie app
- `npm run build-storybook` - Build only Storybook
- `npm run start` - Start Next.js production server
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook development server

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── actions.ts      # Server Actions for API calls
│   ├── globals.css     # Global styles and design tokens
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── MovieAppClient.tsx
│   ├── MovieGrid.tsx
│   ├── MovieCard.tsx
│   ├── HeaderClient.tsx
│   └── ...
├── stories/           # Storybook stories
├── types/            # TypeScript type definitions
└── styles/          # Component-specific styles (deprecated)
```

## Design System

The app uses a cohesive design system with:
- Pastel color palette with gradients
- Glassmorphism effects
- Smooth animations and transitions
- Responsive grid layouts
- Accessible color contrasts

All styles are defined in `src/app/globals.css` using CSS custom properties and modern CSS features.

## API Integration

Movie data is fetched from TMDB API using Next.js Server Actions:
- `getTopRatedMovies()` - Fetch top-rated movies
- `getPopularMovies()` - Fetch popular movies  
- `getNowPlayingMovies()` - Fetch currently playing movies

## Build Outputs

The project generates two separate builds:

### Next.js Movie App (`npm run build-next`)
- **Output**: `.next/` directory
- **Purpose**: Production-ready movie app
- **Deployment**: Deploy this for the main movie application

### Storybook (`npm run build-storybook`) 
- **Output**: `storybook-static/` directory  
- **Purpose**: Component documentation and design system
- **Deployment**: Deploy this for design system documentation

### Combined Build (`npm run build`)
- Builds both the movie app AND Storybook
- Use this for complete project build

## Deployment Options

### Option 1: Deploy Movie App to Vercel
```bash
# Build and deploy the Next.js app
npm run build-next
# Deploy .next/ folder to Vercel
```

### Option 2: Deploy Storybook to Netlify/Vercel
```bash
# Build Storybook
npm run build-storybook  
# Deploy storybook-static/ folder
```

### Option 3: Deploy Both
```bash
# Build everything
npm run build
# Deploy both .next/ and storybook-static/ folders
```

## Deployment

The app is optimized for Vercel deployment:

```bash
npm run build
```

Deploy to Vercel:
1. Push to GitHub
2. Import project in Vercel
3. Add `TMDB_API_KEY` environment variable
4. Deploy!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
