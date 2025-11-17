'use client';

import React from 'react';
import Image from 'next/image';

interface MenuItemCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  spicy?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
  index?: number;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  name,
  description,
  price,
  image,
  spicy = false,
  vegetarian = false,
  vegan = false,
  index = 0,
}) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 hover:-translate-y-2 flex flex-col h-full">
      {/* Food Image */}
      <div className="relative h-48 sm:h-56 md:h-52 lg:h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden flex-shrink-0">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Badges Container - Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {/* Spicy Indicator */}
          {spicy && (
            <div className="bg-white dark:bg-gray-800 text-red-500 px-2.5 py-1.5 rounded-full shadow-lg border border-red-200 dark:border-red-700">
              <span className="text-lg">🌶️</span>
            </div>
          )}
          
          {/* Vegan Indicator */}
          {vegan && (
            <div className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 px-2.5 py-1.5 rounded-full shadow-lg border border-green-200 dark:border-green-700">
              <span className="text-lg">🌱</span>
            </div>
          )}
          
          {/* Vegetarian Indicator (only if not vegan) */}
          {vegetarian && !vegan && (
            <div className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 px-2.5 py-1.5 rounded-full shadow-lg border border-green-200 dark:border-green-700">
              <span className="text-lg">🥬</span>
            </div>
          )}
        </div>
        
        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-orange-500/20 to-transparent rounded-tl-full"></div>
      </div>

      {/* Food Details */}
      <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-grow">
        {/* Header: Name and Price in same row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 leading-tight flex-1">
            {name}
          </h4>
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg flex-shrink-0">
            <span className="text-xs sm:text-sm font-bold whitespace-nowrap">{price}</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 flex-grow mb-4">
          {description}
        </p>
        
        {/* Decorative bottom accent */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
              Authentic Recipe
            </span>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
