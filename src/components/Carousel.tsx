"use client";
import React, { useState } from 'react';
import { CarouselDesignA } from './carousels/CarouselDesignA';
import { CarouselDesignB } from './carousels/CarouselDesignB';
import { CarouselDesignC } from './carousels/CarouselDesignC'; // Import CarouselDesignC
import { CarouselDesignD } from './carousels/CarouselDesignD'; // Import CarouselDesignD

// Map of carousel components
const carouselMap = {
  CarouselDesignA,
  CarouselDesignB,
  CarouselDesignC,
  CarouselDesignD,
} as const;

interface TenantConfig {
  brandName: string;
  // Add other properties that you expect in your config
}

interface CarouselProps {
  config: TenantConfig; // Ensure this matches your config structure
}


type CarouselKey = keyof typeof carouselMap;

const CarouselSwitcher: React.FC<CarouselProps> = ({ config }) => {
  // State to manage the current carousel design
  const [currentCarousel, setCurrentCarousel] = useState<CarouselKey>('CarouselDesignA');

  // Function to handle carousel change
  const handleCarouselChange = (carouselKey: CarouselKey) => {
    setCurrentCarousel(carouselKey);
  };

  // Get the current Carousel component
  const CarouselComponent = carouselMap[currentCarousel];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-xl font-bold mb-4">Welcome to {config.brandName}</h1>
      {/* Render the current carousel with margin */}
      <div className="w-full max-w-lg mb-6 p-16 border rounded shadow-lg justify-center items-center flex">
        <CarouselComponent />
      </div>
      {/* Render buttons for each carousel option */}
      <div className="flex space-x-2">
        {Object.keys(carouselMap).map((key) => (
          <button
            key={key}
            className={`p-2 border rounded ${
              currentCarousel === key ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleCarouselChange(key as CarouselKey)}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarouselSwitcher;
