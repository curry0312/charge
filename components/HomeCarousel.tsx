"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomeCarousel() {
  return (
    <Carousel className="h-screen">
      <CarouselContent className="h-screen">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex justify-center items-center h-screen">123</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-6" />
      <CarouselNext className="absolute right-6" />
    </Carousel>
  );
}
