'use client';

import React from 'react';
import Image from 'next/image';

interface MenuItemCardProps {
  name: string;
  description: string;
  image: string;
  vegetarian?: boolean;
  vegan?: boolean;
  index?: number;
  onClick?: () => void; // Optional click handler for accessibility
  specialTag?: 'favorite' | 'chef-choice' | 'popular' | null; // Optional special tag
  bothVegNonVeg?: boolean; // For items available in both veg and non-veg variants
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  name,
  description,
  image,
  vegetarian = false,
  vegan = false,
  index = 0,
  onClick,
  specialTag = null,
  bothVegNonVeg = false,
}) => {
  // Keyboard handler for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (!onClick) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  // If interactive, use button or accessible div
  const isButton = Boolean(onClick);
  const Wrapper: React.ElementType = isButton ? 'button' : 'div';
  const wrapperProps = isButton
    ? {
        type: 'button' as const,
        tabIndex: 0,
        onClick,
        onKeyDown: handleKeyDown,
        'aria-label': `View details for ${name}`,
        className:
          'group bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 hover:-translate-y-2 flex flex-col h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400/70',
      }
    : {
        className:
          'group bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 hover:-translate-y-2 flex flex-col h-full',
      };

  return (
    <Wrapper {...wrapperProps}>
      {/* Food Image */}
      <div className="relative h-48 sm:h-56 md:h-52 lg:h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden shrink-0 rounded-2xl">
        <Image 
          src={image} 
          alt={`Photo of ${name}`} 
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* Badges Container - Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {/* Both Veg & Non-Veg Indicator (for items available in both variants) */}
          {bothVegNonVeg && (
            <div className="bg-white dark:bg-gray-800 px-2.5 py-1.5 rounded-full shadow-lg border-2 border-orange-500 dark:border-orange-600 flex items-center gap-1" title="Available in Veg & Non-Veg" aria-label="Available in Vegetarian and Non-Vegetarian">
              <span className="text-lg" role="img" aria-label="Vegetarian">🥬</span>
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400">/</span>
              <span className="text-lg font-bold" role="img" aria-label="Non-Vegetarian">🍖</span>
            </div>
          )}
          {/* Non-Veg Indicator (if not vegetarian, vegan, or both) */}
          {!vegetarian && !vegan && !bothVegNonVeg && (
            <div className="bg-white dark:bg-gray-800 text-red-600 dark:text-red-400 px-2.5 py-1.5 rounded-full shadow-lg border-2 border-red-500 dark:border-red-600" title="Non-Vegetarian" aria-label="Non-Vegetarian">
              <span className="text-lg font-bold" role="img" aria-label="Non-Vegetarian">🍖</span>
            </div>
          )}
          {/* Vegan Indicator (only if not both) */}
          {vegan && !bothVegNonVeg && (
            <div className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 px-2.5 py-1.5 rounded-full shadow-lg border border-green-200 dark:border-green-700" title="Vegan" aria-label="Vegan">
              <span className="text-lg" role="img" aria-label="Vegan">🌱</span>
            </div>
          )}
          {/* Vegetarian Indicator (only if not vegan or both) */}
          {vegetarian && !vegan && !bothVegNonVeg && (
            <div className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 px-2.5 py-1.5 rounded-full shadow-lg border border-green-200 dark:border-green-700" title="Vegetarian" aria-label="Vegetarian">
              <span className="text-lg" role="img" aria-label="Vegetarian">🥬</span>
            </div>
          )}
        </div>
        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-orange-500/20 to-transparent rounded-tl-full"></div>
      </div>
      {/* Food Details */}
      <div className="p-5 sm:p-6 lg:p-7 flex flex-col ">
        {/* Header: Name and Price in same row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 leading-tight flex-1">
            {name}
          </h3>
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg shrink-0 flex items-center gap-1" aria-hidden="true">
            {/* Food icon: fork, spoon, and plate SVG */}
            <svg fill="#fff" viewBox="0 -24.48 122.88 122.88" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="22" height="22" aria-hidden="true">
              <g>
                <path fillRule="evenodd" clipRule="evenodd" d="M97.31,36.95c0,9.92-3.49,18.39-10.48,25.38c-7,7-15.46,10.5-25.38,10.5c-9.88,0-18.34-3.49-25.35-10.5 c-7-6.99-10.52-15.46-10.52-25.38c0-9.89,3.51-18.32,10.52-25.34c7.03-7,15.48-10.52,25.35-10.52c9.92,0,18.38,3.51,25.38,10.52 C93.81,18.63,97.31,27.06,97.31,36.95L97.31,36.95L97.31,36.95L97.31,36.95z M16.37,30.34c3.15-2.15,4.73-4.96,4.46-11.39V2.42 c-0.03-2.31-4.22-2.59-4.43,0l-0.16,13.41c-0.01,2.51-3.78,2.59-3.77,0l0.16-13.87c-0.05-2.48-4.05-2.73-4.1,0 c0,3.85-0.16,10.02-0.16,13.87c0.2,2.43-3.3,2.75-3.21,0L5.32,2.05C5.23,0.18,3.17-0.49,1.77,0.39C0.28,1.34,0.58,3.25,0.52,4.86 L0,20.68c0.08,4.6,1.29,8.34,4.89,9.93c0.55,0.24,1.31,0.43,2.19,0.56L5.84,69.75c-0.07,2.29,1.8,4.16,3.99,4.16h0.5 c2.47,0,4.56-2.11,4.49-4.68l-1.09-38.07C14.88,30.98,15.83,30.71,16.37,30.34L16.37,30.34z M106.74,68.59l-0.06-34.65 c-12.15-7.02-8.28-34.07,3.88-33.92c14.78,0.17,16.53,30.48,3.82,33.81l0.94,34.9C115.5,75.33,106.75,75.94,106.74,68.59 L106.74,68.59z M82.33,36.92c0,5.78-2.03,10.71-6.12,14.8c-4.08,4.07-9.01,6.12-14.79,6.12c-5.74,0-10.67-2.05-14.75-6.12 c-4.08-4.09-6.12-9.02-6.12-14.8c0-5.74,2.04-10.67,6.12-14.74c4.09-4.07,9.01-6.12,14.75-6.12C73.03,16.07,82.33,25.3,82.33,36.92 L82.33,36.92L82.33,36.92z M87.22,36.92c0-7.1-2.5-13.17-7.53-18.2s-11.12-7.53-18.27-7.53c-7.13,0-13.2,2.5-18.2,7.53 c-5.03,5.03-7.56,11.1-7.56,18.2c0,7.12,2.53,13.19,7.56,18.24c5,5.04,11.07,7.57,18.2,7.57c7.14,0,13.23-2.53,18.27-7.57 C84.71,50.1,87.22,44.03,87.22,36.92L87.22,36.92L87.22,36.92L87.22,36.92z"></path>
              </g>
            </svg>
          </div>
        </div>
        {/* Description */}
        <p className="text-sm italic sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 grow mb-4">
          {description}
        </p>
        {/* Decorative bottom accent with Special Tags */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
          <div className="flex items-center justify-between">
            {/* Dynamic Special Tag */}
            {specialTag === 'favorite' && (
              <span className="flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wide">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Customer&apos;s Favorite
              </span>
            )}
            {specialTag === 'chef-choice' && (
              <span className="flex items-center gap-1.5 text-xs text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wide">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Chef&apos;s Choice
              </span>
            )}
            {specialTag === 'popular' && (
              <span className="flex items-center gap-1.5 text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wide">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                Most Popular
              </span>
            )}
            {!specialTag && (
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                Authentic Recipe
              </span>
            )}
            <div className="flex gap-1.5" aria-hidden="true">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MenuItemCard;
