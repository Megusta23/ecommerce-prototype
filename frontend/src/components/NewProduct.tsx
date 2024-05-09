import Autoplay from "embla-carousel-autoplay";

import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const NewProduct = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <div className=" bg-slate-800 text-white p-16">
      <h1 className="py-8">New product section</h1>
      <div className="flex">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-screen-sm basis-1/2 cursor-grab active:cursor-grabbing mr-8"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="basis-1/2 bg-slate-200 rounded-md p-8">
          <h1>Somthing interesting to say?</h1>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
