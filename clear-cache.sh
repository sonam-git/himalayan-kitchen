#!/bin/bash

# Comprehensive cache clearing script for Next.js + Turbopack

echo "🧹 Stopping all Node processes..."
pkill -9 node 2>/dev/null || true
sleep 2

echo "🗑️  Removing Next.js build cache..."
rm -rf .next

echo "🗑️  Removing node_modules cache..."
rm -rf node_modules/.cache

echo "🗑️  Removing Turbo cache..."
rm -rf .turbo

echo "🗑️  Removing Turbopack directories..."
find . -type d -name ".turbopack" -exec rm -rf {} + 2>/dev/null || true

echo "🗑️  Removing out directory..."
rm -rf out

echo "🗑️  Removing temporary files..."
find . -type f -name "*.tsbuildinfo" -delete 2>/dev/null || true

echo "✅ All caches cleared!"
echo ""
echo "📝 Next steps:"
echo "1. Close your browser completely"
echo "2. Run: npm run dev"
echo "3. Open browser in incognito/private mode"
echo "4. Navigate to http://localhost:3000"
echo ""
