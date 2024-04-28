import React from "react";
import Image from "./Image";
import Container from "./Container";
import Test_1 from "../assets/images/test-1.png";
import { ImQuotesRight   } from "react-icons/im";
import Slider from "react-slick";

const Testimonial = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <section className="">
      <Container>
     
        <div className="bg-[#F8F8F8] text-center ml-auto pt-20 pb-24">
        <Slider {...settings}>
            <div>
            <div className="relative w-[92px] h-[92px] m-auto">
            <Image imgsrc={Test_1} className="text-center inline-block " />
            <ImQuotesRight   className="m-auto absolute top-0 -right-8 w-[37px] h-[28px] text-[#00000010]" />
          </div>
          <p className="w-[685px] m-auto text-2xl font-semibold font-PlusJaka leading-[33px] text-[#000000] pb-10 pt-7">
            “For all your printing prerequisites. Offer to make and print their
            pamphlets, business cards, solicitations, and occasion programs.
            More than ink… Solutions. ””
          </p>
          <h5 className="font-bold font-PlusJaka text-[18px]">
            Marry.
            <span className="font-medium text-[15px] text-[#9B9B9B]">
              Designer at Lift
            </span>
          </h5>
            </div>
            <div>
            <div className="relative w-[92px] h-[92px] m-auto">
            <Image imgsrc={Test_1} className="text-center inline-block " />
            <ImQuotesRight   className="m-auto absolute top-0 -right-8 w-[37px] h-[28px] text-[#00000010]" />
          </div>
          <p className="w-[685px] m-auto text-2xl font-semibold font-PlusJaka leading-[33px] text-[#000000] pb-10 pt-7">
            “For all your printing prerequisites. Offer to make and print their
            pamphlets, business cards, solicitations, and occasion programs.
            More than ink… Solutions. ””
          </p>
          <h5 className="font-bold font-PlusJaka text-[18px]">
            Marry.
            <span className="font-medium text-[15px] text-[#9B9B9B]">
              Designer at Lift
            </span>
          </h5>
            </div>
            <div>
            <div className="relative w-[92px] h-[92px] m-auto">
            <Image imgsrc={Test_1} className="text-center inline-block " />
            <ImQuotesRight   className="m-auto absolute top-0 -right-8 w-[37px] h-[28px] text-[#00000010]" />
          </div>
          <p className="w-[685px] m-auto text-2xl font-semibold font-PlusJaka leading-[33px] text-[#000000] pb-10 pt-7">
            “For all your printing prerequisites. Offer to make and print their
            pamphlets, business cards, solicitations, and occasion programs.
            More than ink… Solutions. ””
          </p>
          <h5 className="font-bold font-PlusJaka text-[18px]">
            Marry.
            <span className="font-medium text-[15px] text-[#9B9B9B]">
              Designer at Lift
            </span>
          </h5>
            </div>
        </Slider>
         
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
