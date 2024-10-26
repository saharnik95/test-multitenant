"use client";
import React, { useState } from 'react';
import { CustomCarousel } from '@/components/carousels/CustomCarousel';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

interface TenantConfig {
  brandName: string;
}

interface CarouselProps {
  config: TenantConfig; 
}

const CarouselSwitcher: React.FC<CarouselProps> = ({ config }) => {
  const [itemsCount, setItemsCount] = useState<number>(4);
  const [itemsPreview, setItemsPreview] = useState<number>(2);
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");

  const handleItemsCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemsCount(Number(event.target.value));
  };

  const handleItemsPreviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemsPreview(Number(event.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-xl font-bold mb-4">Welcome to {config.brandName}</h1>
      <div className='flex-col flex md:flex-row mb-6'>
        <div className="md:mr-4 mr-2">
          <Label>Items Count</Label>
          <Input type="number" value={itemsCount} onChange={handleItemsCountChange} min={1} className="w-full max-w-xs mt-2" />
        </div>

        <div className="md:mr-4 mr-2">
          <Label>Items Preview</Label>
          <Input type="number" value={itemsPreview} onChange={handleItemsPreviewChange} min={1} className="w-full max-w-xs mt-2" />
        </div>

        <div className="md:mr-4 mr-2">
          <Label>Autoplay</Label>
          <div className="flex items-center justify-center py-1 h-10">
            <Switch checked={autoplay} onCheckedChange={setAutoplay} id="autoplay-switch" />
            <Label htmlFor="autoplay-switch" className="ml-2">Enable Autoplay</Label>
          </div>
        </div>

        <div className="md:mr-4 mr-2">
          <Label>Orientation</Label>
          <Select onValueChange={(value) => setOrientation(value as "horizontal" | "vertical")}>
            <SelectTrigger className="md:w-[180px]">
              <SelectValue placeholder="Select orientation" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Carousel Orientation</SelectLabel>
                <SelectItem value="horizontal">Horizontal</SelectItem>
                <SelectItem value="vertical">Vertical</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-full h-full aspect-[16/9] max-w-5xl mb-6 p-8 border rounded shadow-lg flex justify-center items-center"> {/* Adjust max width */}
        <CustomCarousel 
          itemsCount={itemsCount} 
          itemsPreview={itemsPreview} 
          autoplay={autoplay} 
          orientation={orientation} 
        />
      </div>
    </div>
  );
};

export default CarouselSwitcher;
