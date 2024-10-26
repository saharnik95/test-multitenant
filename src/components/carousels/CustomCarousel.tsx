"use client";

import * as React from "react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CustomCarouselProps {
  itemsCount: number;
  autoplay?: boolean;
  orientation?: "horizontal" | "vertical";
  align?: "start" | "center";
  itemsPreview?: number;
  className?: string;
}

export function CustomCarousel({
  itemsCount,
  autoplay = false,
  orientation = "horizontal",
  align = "start",
  itemsPreview = 1,
  className = "",
}: CustomCarouselProps) {
  const [autoplayPlugin, setAutoplayPlugin] = React.useState<AutoplayType | null>(null);
  const [images, setImages] = React.useState<string[]>(Array(itemsCount).fill(""));

  React.useEffect(() => {
    if (autoplay) {
      const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
      setAutoplayPlugin(plugin);
      return () => plugin.stop();
    } else {
      autoplayPlugin?.stop();
      setAutoplayPlugin(null);
    }
  }, [autoplay]);

  const handleImageUpload = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => {
          const newImages = [...prevImages];
          newImages[index] = reader.result as string;
          return newImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Adjust itemsPreview to not exceed itemsCount
  const validItemsPreview = Math.min(itemsPreview, itemsCount);

  return (
    <div className={`w-full h-[400px]`}>
      <Carousel
        plugins={autoplayPlugin ? [autoplayPlugin] : []}
        className={`w-full h-full ${className}`}
        orientation={orientation}
        opts={{
          align,
          slidesToScroll: 1,
        }}
      >
        <CarouselContent className="w-full ml-0 h-[400px]">
          {Array.from({ length: itemsCount }).map((_, index) => (
            <CarouselItem
              key={index}
              className={`flex ${orientation === "vertical" ? "pt-3 justify-center" : "pl-3"} h-full`}
              style={{
                flex: `0 0 ${100 / validItemsPreview}%`, // Use validItemsPreview for layout calculation
              }}
            >
              <div className="p-1 w-full h-full">
                <Card className="w-full h-full">
                  <CardContent className="relative flex w-full h-full items-center justify-center md:p-6 p-2">
                    {images[index] ? (
                      <img src={images[index]} alt={`Uploaded ${index + 1}`} className="w-full h-full object-cover" />
                    ) : (
                      <label
                        htmlFor={`upload-input-${index}`}
                        className="text-[10px] font-semibold cursor-pointer flex justify-center items-center"
                      >
                        upload photo
                      </label>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(index, e)}
                      id={`upload-input-${index}`}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
