import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import Offer_1 from "../assets/images/offer-1.png";
import Offer_2 from "../assets/images/offer-2.png";
// import Offer_2 from '../assets/images/offe-1.png'

const Offer = () => {
  return (
    <section className="pt-16 pb-24">
        <div class="marquee-content flex justify-between ">
          <p class="font-PlusJaka text-highlight font-normal text-[50px] leading-[100px] uppercase">
            Easy to create & customize
          </p>
          <p class="font-helvetica text-highlight font-normal text-[50px] leading-[100px] uppercase">
            Design your own
          </p>
        </div>
        <Container>
        <Flex className="flex gap-x-8 pt-14">
        <picture>
            <Image imgsrc={Offer_1}/>
        </picture>
        <picture>
            <Image imgsrc={Offer_2}/>
        </picture>
        </Flex>
        </Container>
    </section>
  );
};

export default Offer;
