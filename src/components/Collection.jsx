import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import { FaStarOfLife } from "react-icons/fa6";
import Coll_1 from "../assets/images/coll-1.png";
import Coll_2 from "../assets/images/coll-2.png";
import Coll_3 from "../assets/images/coll-3.png";
import Button from "./Button";

const Collection = () => {
  return (
    <section className="pt-[105px]">
      <Container>
        <Flex className="flex gap-x-7">
          <div className="w-1/3 relative">
            <picture>
              <Image imgsrc={Coll_1} className="w-full" />
            </picture>
            <Button
              title="Men's Collection"
              className="bg-white font-bold font-PlusJaka text-sm leading-[27px] absolute bottom-[30px] left-[50%] translate-x-[-50%] py-[14px] px-7 rounded-[12px] "
            />
          </div>
          <div className="w-1/3 relative">
            <picture>
              <Image imgsrc={Coll_2} className="w-full" />
            </picture>
            <Button
              title="Kid's Collection"
              className="bg-white font-bold font-PlusJaka text-sm leading-[27px] absolute bottom-[30px] left-[50%] translate-x-[-50%] py-[14px] px-7 rounded-[12px] "
            />
          </div>
          <div className="w-1/3 relative">
            <picture>
              <Image imgsrc={Coll_3} className="w-full" />
            </picture>
            <Button
              title="Women's Collection"
              className="bg-white font-bold font-PlusJaka text-sm leading-[27px] absolute bottom-[30px] left-[50%] translate-x-[-50%] py-[14px] px-7 rounded-[12px] "
            />
          </div>
        </Flex>
        <div className="pt-20">
          <Flex className="flex items-center gap-x-12 justify-end">
            <h2 className="uppercase text-[72px] text-[#2EBB77] leading-[100px] ">
              High quality offset printing
            </h2>
            <FaStarOfLife className="inline-block text-[#2EBB77] text-3xl" />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Collection;
