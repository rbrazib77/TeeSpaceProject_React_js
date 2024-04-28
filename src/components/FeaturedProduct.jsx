import React from "react";
import Container from "./Container";
import Image from "./Image";
import Fea_1 from "../assets/images/fea-1.png";
import Fea_2 from "../assets/images/fea-2.png";
import Fea_3 from "../assets/images/fea-3.png";
import Fea_4 from "../assets/images/fea-4.png";
import Fea_5 from "../assets/images/fea-5.png";
import Fea_6 from "../assets/images/fea-6.png";
import Fea_7 from "../assets/images/fea-7.png";
import Fea_8 from "../assets/images/fea-8.png";
import Flex from "./Flex";
import Badge from "./Badge";

const FeaturedProduct = () => {
  return (
    <section className="pt-[50px] pb-40">
      <Container>
        <div className="text-center">
          <h4 className="font-bold text-[40px] font-PlusJaka leading-[46px]">
            Featured products
          </h4>
          <p className="leading-[32px] font-medium text-xl text-[#7E7E7E] pt-4">
            What’s more, we do it right!
          </p>
        </div>
        <Flex className="flex gap-x-8 pt-[75px]">
          <div className="w-1/4">
            <picture>
              <Image imgsrc={Fea_1} className="w-full" />
            </picture>
            <h5 className="text-center font-bold font-PlusJaka text-[18px] leading-[25px] pt-5">
              Zone Sweatshirt
            </h5>
            <p className="text-center font-bold font-PlusJaka text-[16px] leading-[28px] pt-[10px]">
              $19.95 – $159.95
            </p>
          </div>
          <div className="w-1/4">
            <picture>
              <Image imgsrc={Fea_2} className="w-full" />
            </picture>
            <h5 className="text-center font-bold font-PlusJaka text-[18px] leading-[25px] pt-5">
              Zoo Men’s t-shirt
            </h5>
            <p className="text-center font-bold font-PlusJaka text-[16px] leading-[28px] pt-[10px]">
              $19.95 – $159.95
            </p>
          </div>
          <div className="w-1/4 relative">
            <Badge
              title="Hot"
              className="absolute top-[10px] left-[10px] bg-[#F09155] text-white text-[14px] py-[2px] px-[4px] rounded-[3px] font-PlusJaka font-semibold leading-[22px] "
            />
            <picture>
              <Image imgsrc={Fea_3} className="w-full" />
            </picture>
            <h5 className="text-center font-bold font-PlusJaka text-[18px] leading-[25px] pt-5">
              Toddler T-shirt
            </h5>
            <p className="text-center font-bold font-PlusJaka text-[16px] leading-[28px] pt-[10px]">
              $26.00
            </p>
          </div>
          <div className="w-1/4 relative">
            <Badge
              title="-10%"
              className="absolute top-[10px] left-[10px] bg-[#2EBB77] text-white text-[14px] py-[2px] px-[4px] rounded-[3px] font-PlusJaka font-semibold leading-[22px] "
            />
            <Badge
              title="Hot"
              className="absolute top-[40px] left-[10px] bg-[#F09155] text-white text-[14px] py-[2px] px-[4px] rounded-[3px] font-PlusJaka font-semibold leading-[22px] "
            />
            <picture>
              <Image imgsrc={Fea_4} className="w-full" />
            </picture>
            <h5 className="text-center font-bold font-PlusJaka text-[18px] leading-[25px] pt-5">
              Fine Jersey Tee
            </h5>
            <p className="text-center font-bold font-PlusJaka text-[16px] leading-[28px] pt-[10px]">
              $28.00
            </p>
          </div>
        </Flex>
        <Flex className="flex gap-x-8 pt-[50px]">
          <div className="w-1/4 relative">
          <Badge
              title="Sale!"
              className="absolute top-[10px] left-[10px] bg-[#2EBB77] text-white text-[14px] py-[2px] px-[4px] rounded-[3px] font-PlusJaka font-semibold leading-[22px] "
            /> 
            <Badge
              title="New"
              className="absolute top-[40px] left-[10px] bg-[#B479D9] text-white text-[14px] py-[2px] px-[4px] rounded-[3px] font-PlusJaka font-semibold leading-[22px] "
            />
            <picture>
              <Image imgsrc={Fea_5} className="w-full" />
            </picture>
            <h5 className="text-center font-bold font-PlusJaka text-[18px] leading-[25px] pt-5">
            Kids Hoodie
            </h5>
            <p className="text-center font-bold font-PlusJaka text-[16px] leading-[28px] pt-[10px]">
            $26.00 – $29.00
            </p>
          </div>
          <div className="w-1/4 relative">
          <Badge
              title="Sale!"
              className="absolute top-[10px] left-[10px] bg-[#2EBB77] text-white text-[14px] py-[2px] px-[4px] rounded-[3px] font-PlusJaka font-semibold leading-[22px] "
            /> 
            <Badge
              title="New"
              className="absolute top-[40px] left-[10px] bg-[#B479D9] text-white text-[14px] py-[2px] px-[4px] rounded-[3px] font-PlusJaka font-semibold leading-[22px] "
            />
            <picture>
              <Image imgsrc={Fea_6} className="w-full" />
            </picture>
            <h5 className="text-center font-bold font-PlusJaka text-[18px] leading-[25px] pt-5">
            Youth Short Sleeve Tee
            </h5>
            <p className="text-center font-bold font-PlusJaka text-[16px] leading-[28px] pt-[10px]">
            $26.00 – $29.00
            </p>
          </div>
          <div className="w-1/4 relative">
          <Badge
              title="Sale!"
              className="absolute top-[10px] left-[10px] bg-[#2EBB77] text-white text-[14px] py-[2px] px-[4px] rounded-[3px] font-PlusJaka font-semibold leading-[22px] "
            /> 
            <Badge
              title="New"
              className="absolute top-[40px] left-[10px] bg-[#B479D9] text-white text-[14px] py-[2px] px-[4px] rounded-[3px] font-PlusJaka font-semibold leading-[22px] "
            />
            <picture>
              <Image imgsrc={Fea_7} className="w-full" />
            </picture>
            <h5 className="text-center font-bold font-PlusJaka text-[18px] leading-[25px] pt-5">
            Midweight Cotton Tee
            </h5>
            <p className="text-center font-bold font-PlusJaka text-[16px] leading-[28px] pt-[10px]">
            $26.00 – $29.00
            </p>
          </div>
          <div className="w-1/4 relative">
            <Badge
              title="Hot"
              className="absolute top-[10px] left-[10px] bg-[#F09155] text-white text-[14px] py-[2px] px-[4px] rounded-[3px] font-PlusJaka font-semibold leading-[22px] "
            />
            <picture>
              <Image imgsrc={Fea_8} className="w-full" />
            </picture>
            <h5 className="text-center font-bold font-PlusJaka text-[18px] leading-[25px] pt-5">
            Hooded Sweatshirt
            </h5>
            <p className="text-center font-bold font-PlusJaka text-[16px] leading-[28px] pt-[10px]">
              $26.00
            </p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default FeaturedProduct;
