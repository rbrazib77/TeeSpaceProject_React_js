import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import Services_1 from "../assets/images/service1.png";
import Services_2 from "../assets/images/service2.png";
import Services_3 from "../assets/images/service3.png";
import Services_4 from "../assets/images/service4.png";
import Container from "./Container";

const Services = () => {
  return (
    <section className="pt-[90px] pb-[100px]">
      <Container>
        <Flex className="flex">
          <div className="w-1/4">
            <Image imgsrc={Services_1} className="m-auto" />
            <h5 className="text-[18px] font-bold font-PlusJaka leading-[25px] text-center pt-[21px]">
              Worldwide Shipping
            </h5>
            <p className="text-[15px] font-medium font-PlusJaka leading-[27px] text-center pb-[11px] ">
              Get free shipping over $65.
            </p>
          </div>
          <div className="w-1/4">
            <Image imgsrc={Services_2} className="m-auto" />
            <h5 className="text-[18px] font-bold font-PlusJaka leading-[25px] text-center pt-[21px]">
              Returns
            </h5>
            <p className="text-[15px] font-medium font-PlusJaka leading-[27px] text-center pb-[11px] ">
              Within 30 days for an exchange.
            </p>
          </div>
          <div className="w-1/4">
            <Image imgsrc={Services_3} className="m-auto" />
            <h5 className="text-[18px] font-bold font-PlusJaka leading-[25px] text-center pt-[21px]">
              Online Support
            </h5>
            <p className="text-[15px] font-medium font-PlusJaka leading-[27px] text-center pb-[11px] ">
              Top notch customer service.
            </p>
          </div>
          <div className="w-1/4">
            <Image imgsrc={Services_4} className="m-auto" />
            <h5 className="text-[18px] font-bold font-PlusJaka leading-[25px] text-center pt-[21px]">
              Flexible Payment
            </h5>
            <p className="text-[15px] font-medium font-PlusJaka leading-[27px] text-center pb-[11px] ">
            Pay with Multiple Credit Cards
            </p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Services;
