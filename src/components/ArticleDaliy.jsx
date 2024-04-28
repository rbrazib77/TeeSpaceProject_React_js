import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { TfiAngleRight } from "react-icons/tfi";
import Image from "./Image";
import Article1 from "../assets/images/article1.png";
import Article2 from "../assets/images/article2.png";
import Article3 from "../assets/images/article3.png";
import Button from "./Button";

const ArticleDaliy = () => {
  return (
    <section className="pb-24">
      <Container>
        <Flex className="flex gap-x-7">
          <div className="w-[360px]">
            <h3 className="text-[40px] font-PlusJaka font-bold leading-[46px]">
              Articles daily updated
            </h3>
            <p className=" w-[348px] pt-2 text-[20px] font-PlusJaka font-medium leading-[32px]">
              Get inspiration, updates, tips, &other assorted awesomeness.
            </p>
            <Flex className="flex items-center">
              <p className="text-[18px] text-[#2EBB77] font-bold font-PlusJaka leading-[56px]">
                Read latest articles
              </p>
              <TfiAngleRight className="text-[18px] text-[#2EBB77] pl-2" />
            </Flex>
          </div>
          <div className="w-[330px]">
            <Image imgsrc={Article1} className="rounded-[12px] pb-6" />
            <Flex className="flex gap-x-[10px] items-center">
              <Button
                title="Design Services"
                className=" bg-[#F5F5F5] text-[15px] leading-[27px] font-PlusJaka font-bold text-[#7E7E7E] py-2 px-4 rounded-[40px] "
              />
              <p className="font-PlusJaka font-medium text-[15px] leading-[27px] text-[#7E7E7E]">
                August 20, 2022
              </p>
            </Flex>
            <p className="text[#000000] text-[20px] font-PlusJaka font-bold leading-[28px] pt-[16px]">
              Make yourself happy with our T- shirt customer designer
            </p>
          </div>
          <div className="w-[330px]">
            <Image imgsrc={Article2} className="rounded-[12px] pb-6" />
            <Flex className="flex gap-x-[10px] items-center">
              <Button
                title="Print Company"
                className=" bg-[#F5F5F5] text-[15px] leading-[27px] font-PlusJaka font-bold text-[#7E7E7E] py-2 px-4 rounded-[40px] "
              />
              <p className="font-PlusJaka font-medium text-[15px] leading-[27px] text-[#7E7E7E]">
                August 20, 2022
              </p>
            </Flex>
            <p className="text[#000000] text-[20px] font-PlusJaka font-bold leading-[28px] pt-[16px]">
            Are you ready to make it awesome with us
            </p>
          </div>
          <div className="w-[330px]">
            <Image imgsrc={Article3} className="rounded-[12px] pb-6" />
            <Flex className="flex gap-x-[10px] items-center">
              <Button
                title="Print Company"
                className=" bg-[#F5F5F5] text-[15px] leading-[27px] font-PlusJaka font-bold text-[#7E7E7E] py-2 px-4 rounded-[40px] "
              />
              <p className="font-PlusJaka font-medium text-[15px] leading-[27px] text-[#7E7E7E]">
                August 20, 2022
              </p>
            </Flex>
            <p className="text[#000000] text-[20px] font-PlusJaka font-bold leading-[28px] pt-[16px]">
            The best custom T-shirt designer WordPress theme
            </p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default ArticleDaliy;
