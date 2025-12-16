/**
 * Storyblok Image Optimization Utilities
 * 
 * These utilities help generate optimized Storyblok image URLs with proper parameters
 * for better performance and Core Web Vitals.
 */

export interface StoryblokImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  fit?: 'in' | 'out' | 'fill';
  focal?: string; // e.g., "center" or "smart"
  filters?: {
    blur?: number;
    brightness?: number;
    fill?: string;
    grayscale?: boolean;
    quality?: number;
  };
}

/**
 * Check if a URL is from Storyblok CDN
 */
export function isStoryblokImage(src: string): boolean {
  return src.includes('storyblok.com') || src.includes('a.storyblok.com');
}

/**
 * Optimize Storyblok image URL with parameters
 * 
 * @param src - The original Storyblok image URL (image.filename)
 * @param options - Optimization options
 * @returns Optimized URL string
 * 
 * @example
 * ```ts
 * const optimizedUrl = optimizeStoryblokImage(
 *   'https://a.storyblok.com/f/12345/image.jpg',
 *   { width: 800, quality: 85, format: 'webp' }
 * );
 * ```
 */
export function optimizeStoryblokImage(
  src: string,
  options: StoryblokImageOptions = {}
): string {
  // If not a Storyblok image, return as-is
  if (!isStoryblokImage(src)) {
    return src;
  }

  // If already has /m/ in the path (already optimized), return as-is
  if (src.includes('/m/')) {
    return src;
  }

  try {
    const url = new URL(src);
    
    // Build the optimization path segment
    const params: string[] = [];
    
    if (options.width && options.height) {
      params.push(`${options.width}x${options.height}`);
    } else if (options.width) {
      params.push(`${options.width}x0`);
    } else if (options.height) {
      params.push(`0x${options.height}`);
    }
    
    if (options.fit) {
      params.push(`filters:format(${options.format || 'webp'})`);
      params.push(`fit(${options.fit})`);
    }
    
    if (options.quality) {
      params.push(`filters:quality(${options.quality})`);
    }
    
    if (options.focal) {
      params.push(`focal(${options.focal})`);
    }
    
    // Apply additional filters
    if (options.filters) {
      if (options.filters.blur) {
        params.push(`filters:blur(${options.filters.blur})`);
      }
      if (options.filters.brightness) {
        params.push(`filters:brightness(${options.filters.brightness})`);
      }
      if (options.filters.grayscale) {
        params.push('filters:grayscale()');
      }
    }

    // Insert /m/ optimization path if we have parameters
    if (params.length > 0) {
      const pathParts = url.pathname.split('/');
      // Insert 'm' after the space ID (typically index 2)
      pathParts.splice(3, 0, 'm', params.join('/'));
      url.pathname = pathParts.join('/');
    }
    
    return url.toString();
  } catch (error) {
    console.warn('Failed to optimize Storyblok image URL:', error);
    return src;
  }
}

/**
 * Generate responsive image sizes string for Next.js Image component
 * 
 * @param type - The type of gallery/component using the image
 * @returns sizes string for responsive images
 */
export function getResponsiveSizes(type: 'gallery' | 'hero' | 'thumbnail' | 'modal' | 'food'): string {
  switch (type) {
    case 'hero':
      return '100vw';
    case 'modal':
      return '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px';
    case 'gallery':
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
    case 'food':
      return '(max-width: 768px) 85vw, (max-width: 1024px) 45vw, (max-width: 1280px) 32vw, 28vw';
    case 'thumbnail':
      return '(max-width: 768px) 50vw, 25vw';
    default:
      return '100vw';
  }
}

/**
 * Get blur data URL for image placeholder
 * Can be enhanced to generate real blur hashes from Storyblok images
 */
export function getBlurDataURL(src?: string): string {
  // Simple gray placeholder
  const grayPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg==';
  
  // For Storyblok images, we could fetch a tiny version, but for now use placeholder
  if (src && isStoryblokImage(src)) {
    // Could enhance this to use Storyblok's image service to create a 10px blur version
    // const tinyUrl = optimizeStoryblokImage(src, { width: 10, quality: 10, filters: { blur: 10 } });
    return grayPlaceholder;
  }
  
  return grayPlaceholder;
}

/**
 * Extract dimensions from Storyblok image metadata if available
 * Note: This would require the full asset object from Storyblok API
 */
export function extractImageDimensions(asset: unknown): { width?: number; height?: number } {
  // If asset has dimensions, extract them
  if (typeof asset === 'object' && asset !== null) {
    const imageAsset = asset as { width?: number; height?: number };
    return {
      width: imageAsset.width,
      height: imageAsset.height,
    };
  }
  return {};
}
