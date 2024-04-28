import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Button from "./Button";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import Best1 from "../assets/images/best1.png";
import Image from "./Image";

const BestTshirt = () => {
  return (
    <section className="bg-highlight  w-full overflow-hidden relative">
      <span className="bg-[#FFFFFF40] h-[480px] w-[540px] absolute -left-[220px] top-0 rounded-full inline-block"></span>
      <span className="bg-[#FFFFFF40] h-[165px] w-[165px] absolute left-[40%] top-20 rounded-full inline-block"></span>
      <span className="bg-[#FFFFFF40] h-[490px] w-[490px] absolute right-[355px] -bottom-[200px] rounded-full inline-block"></span>
      <Container>
        <Flex className="flex">
          <div className="w-[720px]">
            <h4 className=" w-[560px] text-5xl leading-[60px] font-bold font-PlusJaka text-[#FFFFFF] pt-24">
              Enjoy up your vacations in the best T-shirts
            </h4>
            <p className="text-xl leading-[32px] font-bold font-PlusJaka text-[#FFFFFF] pt-3 pb-11">
              T-shirts that keep you moving.
            </p>
            <Flex className="flex gap-x-6">
              <Flex className="flex items-center relative">
                <Button
                  title="Shop Now"
                  className="pl-6 pr-14 bg-white rounded-xl py-4 font-bold font-PlusJaka text-[15px]  text-[#000000] "
                />
                <HiOutlineArrowSmallRight className="absolute right-6 top-[50%] translate-y-[-50%] text-[18px]" />
              </Flex>
              <Flex className="flex items-center relative">
                <Button
                  title="Contact Us"
                  className="pl-6 pr-14 bg-white rounded-xl py-4 font-bold font-PlusJaka text-[15px]  text-[#000000] "
                />
                <HiOutlineArrowSmallRight className="absolute right-6 top-[50%] translate-y-[-50%] text-[18px]" />
              </Flex>
            </Flex>
          </div>
          <div className="w-[720px] ">
            <Image imgsrc={Best1} className="py-4 m-auto" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default BestTshirt;
