import React from "react";
import Flex from "./Flex";
import bannerimg from "../assets/images/banner.png";
import Container from "./Container";
import Image from "./Image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { VscDebugStart } from "react-icons/vsc";
import { GrCheckmark } from "react-icons/gr";

import Button from "./Button";

const Banner = () => {
  return (
    <section className="">
      <Container>
        <Flex className="flex">
          <div>
            <picture>
              <Image imgsrc={bannerimg} alt="not" />
            </picture>
          </div>
          <div className="pt-[165px] ml-14">
            <div className="flex items-center">
              <button className="py-2 bg-[#B479D9] px-4 rounded-[40px] mr-2">
                Rated 4.9 of 5.0
              </button>
              <MdOutlineStarPurple500 className="text-[#F3BB2E] text-xl" />
              <MdOutlineStarPurple500 className="text-[#F3BB2E] text-xl" />
              <MdOutlineStarPurple500 className="text-[#F3BB2E] text-xl" />
              <MdOutlineStarPurple500 className="text-[#F3BB2E] text-xl" />
              <MdOutlineStarPurple500 className="text-[#F3BB2E] text-xl" />
            </div>
            <h4 className="text-5xl font-bold font-PlusJaka  w-[550px] leading-[60px] pt-[19px] pb-[19px] ">
              Enjoy up your vacations in the best T-shirts
            </h4>
            <p className="w-[590px] text-[18px] font-PlusJaka font-medium leading-[32px]">
              What’s more, we do it right! A full administration printing
              background. Print shirts for yourself or your online business
            </p>

            <Flex className="flex items-center gap-x-4 pt-9">
              <GrCheckmark className="h-8 w-8 rounded-full text-[16px] p-1 text-highlight bg-[#E2F5F2]" />
              <p className="text-[18px] font-PlusJaka font-medium leading-[32px]">
                Top quality prints using the latest technology
              </p>
            </Flex>
            <Flex className="flex items-center gap-x-4 pt-4 pb-12">
              <GrCheckmark className="h-8 w-8 rounded-full text-[16px] p-1 text-highlight bg-[#E2F5F2]" />
              <p className="text-[18px] font-PlusJaka font-medium leading-[32px]">
                Mix and match colors, sizes, and designs
              </p>
            </Flex>

            <Flex className="flex">
              <div className="flex relative">
                <Button
                  title="Get Started Today"
                  className="bg-highlight h-14 pl-7 pr-12 rounded-xl text-base text-white font-bold font-PlusJaka leading-[56px] "
                />
                <IoIosArrowRoundForward className="absolute top-[50%] translate-y-[-50%] left-[175px] text-white text-[12px]" />
              </div>
              <div className="flex items-center ml-7">
                <h5 className="text-[16px] leading-[56px] font-bold font-PlusJaka text-[#000000] pr-3">
                  {" "}
                  How We Work
                </h5>
                <VscDebugStart className="h-8 w-8 rounded-full border border-[#000000] p-2" />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
