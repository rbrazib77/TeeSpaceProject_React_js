import React from "react";
import Container from "./Container";
import T_1 from "../assets/images/t-1.png";
import T_2 from "../assets/images/t-2.png";
import T_3 from "../assets/images/t-3.png";
import T_4 from "../assets/images/t-4.png";
import T_5 from "../assets/images/t-5.png";
import Image from "./Image";
import Flex from "./Flex";

const Tshirtprinting = () => {
  return (
    <section className="pt-[92px]">
      <Container>
        <div className="text-center">
          <h4 className="font-bold text-[40px] font-PlusJaka leading-[46px]">
            T-shirt Printing for Everyone
          </h4>
          <p className="leading-[32px] font-medium text-xl text-[#7E7E7E] pt-4">
            What’s more, we do it right!
          </p>
        </div>
        <Flex className="flex gap-x-12 pt-20 px-10">
          <div className="w-1/5">
            <picture>
              <Image imgsrc={T_1} className="w-full pb-4" />
            </picture>
            <div className="flex justify-center">
              <p className="text-xl font-bold font-PlusJaka relative">
                T-shirt
              </p>
              <span className="font-PlusJaka text-sm -mt-2 font-semibold  text-[#7E7E7E]">
                15
              </span>
            </div>
          </div>
          <div className="w-1/5">
            <picture>
              <Image imgsrc={T_2} className="w-full pb-4" />
            </picture>
            <div className="flex justify-center">
              <p className="text-xl font-bold font-PlusJaka relative">
                Long-sleeves
              </p>
              <span className="font-PlusJaka text-sm -mt-2 font-semibold  text-[#7E7E7E]">
                15
              </span>
            </div>
          </div>
          <div className="w-1/5">
            <picture>
              <Image imgsrc={T_3} className="w-full pb-4" />
            </picture>
            <div className="flex justify-center">
              <p className="text-xl font-bold font-PlusJaka relative">
                Sweater
              </p>
              <span className="font-PlusJaka text-sm -mt-2 font-semibold  text-[#7E7E7E]">
                18
              </span>
            </div>
          </div>
          <div className="w-1/5">
            <picture>
              <Image imgsrc={T_4} className="w-full pb-4" />
            </picture>
            <div className="flex justify-center">
              <p className="text-xl font-bold font-PlusJaka relative">
                Hoodies
              </p>
              <span className="font-PlusJaka text-sm -mt-2 font-semibold  text-[#7E7E7E]">
                9
              </span>
            </div>
          </div>
          <div className="w-1/5">
            <picture>
              <Image imgsrc={T_5} className="w-full pb-4" />
            </picture>
            <div className="flex justify-center">
              <p className="text-xl font-bold font-PlusJaka relative">
                Tanktop
              </p>
              <span className="font-PlusJaka text-sm -mt-2 font-semibold  text-[#7E7E7E]">
                6
              </span>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Tshirtprinting;
