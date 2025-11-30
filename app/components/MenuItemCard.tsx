'use client';

import React from 'react';
import Image from 'next/image';

interface MenuItemCardProps {
  name: string;
  description: string;
  image: string;
  spicy?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
  index?: number;
  onClick?: () => void; // Optional click handler for accessibility
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  name,
  description,
  image,
  spicy = false,
  vegetarian = false,
  vegan = false,
  index = 0,
  onClick,
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
        role: 'button',
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
      <div className="relative h-48 sm:h-56 md:h-52 lg:h-56 bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden shrink-0 rounded-2xl">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* Badges Container - Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {/* Spicy Indicator */}
          {spicy && (
            <div className="bg-white dark:bg-gray-800 text-red-500 px-2.5 py-1.5 rounded-full shadow-lg border border-red-200 dark:border-red-700" title="Spicy" aria-label="Spicy">
              <span className="text-lg" role="img" aria-label="Spicy">🌶️</span>
            </div>
          )}
          {/* Vegan Indicator */}
          {vegan && (
            <div className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 px-2.5 py-1.5 rounded-full shadow-lg border border-green-200 dark:border-green-700" title="Vegan" aria-label="Vegan">
              <span className="text-lg" role="img" aria-label="Vegan">🌱</span>
            </div>
          )}
          {/* Vegetarian Indicator (only if not vegan) */}
          {vegetarian && !vegan && (
            <div className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 px-2.5 py-1.5 rounded-full shadow-lg border border-green-200 dark:border-green-700" title="Vegetarian" aria-label="Vegetarian">
              <span className="text-lg" role="img" aria-label="Vegetarian">🥬</span>
            </div>
          )}
        </div>
        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-orange-500/20 to-transparent rounded-tl-full"></div>
      </div>
      {/* Food Details */}
      <div className="p-5 sm:p-6 lg:p-7 flex flex-col ">
        {/* Header: Name and Price in same row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 leading-tight flex-1">
            {name}
          </h4>
          <div className="bg-linear-to-r from-red-600 to-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg shrink-0 flex items-center gap-1" title="Food icon" aria-label="Food icon">
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
        {/* Decorative bottom accent */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
              Authentic Recipe
            </span>
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
