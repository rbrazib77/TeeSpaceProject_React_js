import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import Extra_1 from "../assets/images/extra-1.png";
import Extra_2 from "../assets/images/extra-2.png";
import Container from "./Container";
import Button from "./Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Timer from "./Timer";

const ExtraSale = () => {
  return (
    <section className="bg-[#F8F8F8] py-28">
      <Container>
        <Flex className="flex">
          <div className="w-[576px]">
            <span className="inline-block text-[14px] font-bold font-PlusJaka uppercase text-[#B479D9] leading-[19px]">
              special offer
            </span>
            <h5 className="text-[40px] font-bold font-PlusJaka text-[#000000] leading-[46px] pt-5 pb-2">
              Extra Sale 30% off
            </h5>
            <p className=" w-[363px] text-[18px] font-medium font-PlusJaka text-[#7E7E7E] leading-[32px] pb-5">
              Bucket toy with a contrast colored handle. Perfect for playing on
              the beach,
            </p>
            <Timer />
            <div className="flex relative mt-9">
              <Button
                title="Get only $29.00"
                className="bg-highlight h-14 pl-7 pr-12 rounded-xl text-base text-white font-bold font-PlusJaka leading-[56px] "
              />
              <IoIosArrowRoundForward className="absolute top-[50%] translate-y-[-50%] left-[175px] text-white text-[12px]" />
            </div>
          </div>
          <div className="w-[867px]">
            <Flex className="flex gap-x-5 justify-end">
              <picture>
                <Image imgsrc={Extra_1} />
              </picture>
              <div className="relative">
                <div className="absolute top-[50%] translate-y-[-50%] left-[-80px] bg-[#B479D9] inline-block h-40 w-40 rounded-full  ">
                  <div className=" text-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                    <p className="font-PlusJaka font-bold text-2xl text-[#ffffff] leading-[24px] pb-2">
                      Save
                    </p>
                    <span className="font-PlusJaka font-bold text-[40px] text-[#ffffff] leading-[40px]">
                      30%
                    </span>
                  </div>
                </div>
              </div>
              <picture>
                <Image imgsrc={Extra_2} className="pt-16" />
              </picture>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default ExtraSale;
