# Deployment Guide for Vercel

## Issues Fixed

1. **Image Path Issues**: Changed from `/src/assets/...` paths to proper ES6 imports
2. **Asset Handling**: Created centralized asset index for better organization
3. **Build Configuration**: Updated Vite config for proper production builds
4. **Vercel Configuration**: Added vercel.json for proper SPA routing

## Changes Made

### 1. Created Asset Index (`src/assets/index.ts`)
- Centralized all image imports
- Proper ES6 module exports
- Better organization and maintainability

### 2. Updated Components
- **Home.tsx**: Fixed all image references
- **Portfolio.tsx**: Updated image imports
- **ImageGallery.tsx**: Fixed gallery image paths
- **About.tsx**: Updated profile and team images
- **Services.tsx**: Fixed project images

### 3. Build Configuration
- **vite.config.ts**: Added proper asset handling
- **vercel.json**: Added for SPA routing support

## Deployment Steps

1. **Build the project locally to test**:
   ```bash
   npm run build
   npm run preview
   ```

2. **Deploy to Vercel**:
   - Push changes to your Git repository
   - Vercel will automatically detect the changes and redeploy
   - Or manually trigger deployment from Vercel dashboard

3. **Verify deployment**:
   - Check that all images load correctly
   - Test navigation and routing
   - Verify responsive design

## Key Points

- All images are now properly imported as ES6 modules
- Vite will process and optimize images during build
- Images will have proper cache-busting hashes in production
- No more broken image paths in production

## Troubleshooting

If images still don't load:
1. Check browser console for 404 errors
2. Verify all imports in `src/assets/index.ts`
3. Ensure image files exist in the correct paths
4. Clear Vercel build cache and redeploy