#!/bin/bash

# Build script for dual deployment: Movie App + Storybook

echo "🎬 Building Movie App + Storybook for Dual Deployment"
echo "======================================================"

# Build Next.js movie app
echo "📦 Building Next.js movie app..."
npm run build-next

if [ $? -eq 0 ]; then
    echo "✅ Next.js build successful! (.next/)"
else
    echo "❌ Next.js build failed!"
    exit 1
fi

# Build Storybook
echo "📚 Building Storybook..."
npm run build-storybook

if [ $? -eq 0 ]; then
    echo "✅ Storybook build successful! (storybook-static/)"
else
    echo "❌ Storybook build failed!"
    exit 1
fi

echo ""
echo "🎉 Both builds completed successfully!"
echo ""
echo "📁 Movie App build: .next/"
echo "📁 Storybook build: storybook-static/"
echo ""
echo "🚀 Ready for dual deployment to Vercel!"
echo "   → Movie App: Use 'npm run build-next' command"
echo "   → Storybook: Use 'npm run build-storybook' command"
echo ""
echo "See DEPLOYMENT.md for detailed deployment instructions."
