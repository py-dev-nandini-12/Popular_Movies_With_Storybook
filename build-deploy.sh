#!/bin/bash

# Build and deployment script for Movie App + Storybook

echo "🎬 Building Movie App + Storybook..."
echo "======================================"

# Build Next.js app
echo "📦 Building Next.js movie app..."
npm run build-next

if [ $? -eq 0 ]; then
    echo "✅ Next.js build successful!"
else
    echo "❌ Next.js build failed!"
    exit 1
fi

# Build Storybook
echo "📚 Building Storybook..."
npm run build-storybook

if [ $? -eq 0 ]; then
    echo "✅ Storybook build successful!"
else
    echo "❌ Storybook build failed!"
    exit 1
fi

echo ""
echo "🎉 Both builds completed successfully!"
echo "📁 Next.js app: .next/"
echo "📁 Storybook: storybook-static/"
echo ""
echo "Ready to deploy! 🚀"
