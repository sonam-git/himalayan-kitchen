#!/bin/bash
# Restart Next.js Development Server Script

echo "🔄 Stopping any running Next.js processes..."
pkill -f "next dev" 2>/dev/null

echo "🧹 Clearing Next.js cache and lock files..."
rm -rf .next

echo "✨ Starting fresh Next.js development server..."
npm run dev
