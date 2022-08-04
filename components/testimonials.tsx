import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Some Random Dude">This guy will rock your sock!</Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Some Random Dude 2">He is so cool bro</Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Just a guy">Omg</Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Cristiana (my gf)">Hire him</Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
