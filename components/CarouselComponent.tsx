"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type CarouselComponentProps = {
  children: React.ReactNode;
};

export default function CarouselComponent({
  children,
}: CarouselComponentProps) {
  return (
    <Carousel className="h-full">
      <CarouselContent className="h-full">{children}</CarouselContent>
      <CarouselPrevious className="absolute left-6" />
      <CarouselNext className="absolute right-6" />
    </Carousel>
  );
}
