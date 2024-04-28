import React from "react";
import { GoTriangleLeft } from "react-icons/go";
import Container from "./Container";
const Breadcurmb = ({ title }) => {
  return (
    <section className="pt-14 pb-16 bg-[#F5F5F5]">
    <Container>
      <div className="text-center">
        <h1 className="mb-3 font-PlusJaka  text-[40px] font-bold">{title}</h1>
        <p className="font-regular flex justify-center items-center gap-x-2 font-dm text-xs text-[#7E7E7E]">
          Home <GoTriangleLeft />
          {window.location.pathname.split("/")[1].charAt(0).toUpperCase() +
            window.location.pathname.split("/")[1].slice(1)}
        </p>
      </div>
    </Container>
    </section>
  );
};

export default Breadcurmb;
