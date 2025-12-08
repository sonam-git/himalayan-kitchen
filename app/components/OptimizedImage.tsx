"use client";

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

/**
 * OptimizedImage component with progressive loading and blur placeholder
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
  blurDataURL
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate a simple blur placeholder if not provided
  const defaultBlurDataURL = 
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg==';

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
    ...(placeholder === 'blur' && { placeholder, blurDataURL: blurDataURL || defaultBlurDataURL })
  };

  if (hasError) {
    return (
      <div 
        className={`${className} flex items-center justify-center bg-gray-200 dark:bg-gray-800`}
        style={{ width, height }}
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
        src={src}
        alt={alt}
        fill
        style={{ objectFit }}
      />
    );
  }

  return (
    <Image
      {...commonProps}
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ objectFit }}
    />
  );
}
