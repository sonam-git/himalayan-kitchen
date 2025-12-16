"use client";

import Image from 'next/image';
import { useState } from 'react';
import { optimizeStoryblokImage, isStoryblokImage, getBlurDataURL } from '../lib/storyblok-image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  // Storyblok-specific options
  storyblokOptimize?: boolean;
}

/**
 * OptimizedImage component with progressive loading and blur placeholder
 * Supports both local images and Storyblok CDN images
 * Improves LCP and reduces layout shift
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  quality = 85,
  fill = false,
  objectFit = 'cover',
  loading = 'lazy',
  placeholder = 'blur',
  blurDataURL,
  storyblokOptimize = true,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Optimize Storyblok images if enabled
  const optimizedSrc = storyblokOptimize && isStoryblokImage(src) 
    ? optimizeStoryblokImage(src, { 
        width: fill ? undefined : width, 
        height: fill ? undefined : height,
        quality 
      })
    : src;

  // Generate a blur placeholder
  const finalBlurDataURL = blurDataURL || getBlurDataURL(src);

  const commonProps = {
    quality,
    className: `${className} ${isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'} transition-all duration-500`,
    onLoad: () => setIsLoading(false),
    onError: () => {
      setHasError(true);
      setIsLoading(false);
    },
    ...(priority && { priority: true }),
    ...(loading && { loading }),
    ...(sizes && { sizes }),
    ...(placeholder === 'blur' && { placeholder, blurDataURL: finalBlurDataURL })
  };

  if (hasError) {
    return (
      <div 
        className={`${className} flex items-center justify-center bg-gray-200 dark:bg-gray-800`}
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
        role="img"
        aria-label={`Failed to load: ${alt}`}
      >
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        {...commonProps}
        src={optimizedSrc}
        alt={alt}
        fill
        style={{ objectFit }}
      />
    );
  }

  // For non-fill mode, width and height are required
  if (!width || !height) {
    console.warn('OptimizedImage: width and height are required when fill=false');
    return null;
  }

  return (
    <Image
      {...commonProps}
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      style={{ objectFit }}
    />
  );
}
