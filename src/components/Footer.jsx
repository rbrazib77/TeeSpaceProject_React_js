import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import Logo from "../assets/images/logo.png";
import paymentLogo from "../assets/images/payment.png";
import List from "./List";
import ListItem from "./ListItem";
import Button from "./Button";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";


const Footer = () => {
  return (
    <section className="pt-24">
      <Container>
        <Flex className="flex border-b-2 pb-11">
          <div className="w-[288px]">
            <Image imgsrc={Logo} className="w-[150px]" />
            <h5 className="text-base font-medium font-PlusJaka leading-[28px] text-[#7E7E7E]">
              hello@teespace.io
            </h5>
            <h4 className="text-lg font-bold font-PlusJaka leading-[32px] pt-3 pb-4">
              +02 036 038 3996
            </h4>
            <p className="text-[#7E7E7E] w-[240px] text-base font-medium font-PlusJaka leading-[28px]">
              3665 Paseo Place, Suite 0960 San Diego
            </p>
          </div>
          <div className="w-[288px]">
            <h5 className="text-[20px] font-PlusJaka font-bold text-[#000000] leading-[28px] pb-[20px]">
              Information
            </h5>
            <List>
              <ListItem
                listname="About us"
                className="text-[16px] font-PlusJaka font-medium leading-[28px] pb-4"
              />
              <ListItem
                listname="Our Blog"
                className="text-[16px] font-PlusJaka font-medium leading-[28px] pb-4"
              />
              <ListItem
                listname="Start a Return"
                className="text-[16px] font-PlusJaka font-medium leading-[28px] pb-4"
              />
              <ListItem
                listname="Contact Us"
                className="text-[16px] font-PlusJaka font-medium leading-[28px] pb-4"
              />
              <ListItem
                listname="Shipping FAQ"
                className="text-[16px] font-PlusJaka font-medium leading-[28px]"
              />
            </List>
          </div>
          <div className="w-[288px]">
            <h5 className="text-[20px] font-PlusJaka font-bold text-[#000000] leading-[28px] pb-[20px]">
              Services
            </h5>
            <List>
              <ListItem
                listname="Printing Services"
                className="text-[16px] font-PlusJaka font-medium leading-[28px] pb-4"
              />
              <ListItem
                listname="Digital Scanning"
                className="text-[16px] font-PlusJaka font-medium leading-[28px] pb-4"
              />
              <ListItem
                listname="Design Services"
                className="text-[16px] font-PlusJaka font-medium leading-[28px] pb-4"
              />
              <ListItem
                listname="Copying Services"
                className="text-[16px] font-PlusJaka font-medium leading-[28px] pb-4"
              />
              <ListItem
                listname="Print on Demand"
                className="text-[16px] font-PlusJaka font-medium leading-[28px]"
              />
            </List>
          </div>
          <div className="w-[288px]">
            <h5 className="text-[20px] font-PlusJaka font-bold text-[#000000] leading-[28px] pb-[20px]">
              Useful links
            </h5>
            <List>
              <ListItem
                listname="My Account"
                className="text-[16px] font-PlusJaka font-medium leading-[28px] pb-4"
              />
              <ListItem
                listname="Print Provider"
                className="text-[16px] font-PlusJaka font-medium leading-[28px] pb-4"
              />
              <ListItem
                listname="Become a Partner"
                className="text-[16px] font-PlusJaka font-medium leading-[28px] pb-4"
              />
              <ListItem
                listname="Custom Products"
                className="text-[16px] font-PlusJaka font-medium leading-[28px] pb-4"
              />
              <ListItem
                listname="Make your own shirt"
                className="text-[16px] font-PlusJaka font-medium leading-[28px]"
              />
            </List>
          </div>
          <div className="w-[288px]">
            <h5 className="text-[20px] font-PlusJaka font-bold text-[#000000] leading-[28px] pb-[20px]">
              Newsletter
            </h5>
            <List>
              <ListItem
                listname="Subscribe to our newsletter."
                className="text-[16px] font-PlusJaka font-medium leading-[28px] pb-4"
              />
            </List>

            <input
              type="text"
              placeholder="Your email address"
              className="bg-[#F5F5F5] py-4 rounded-[12px] font-PlusJaka font-bold text-[15px] block px-5 w-full outline-none"
            />
            <Button
              title="Subscribe"
              className="bg-highlight py-4 w-full font-PlusJaka font-bold text-[15px] rounded-[12px] text-white px-5 mt-5"
            />
          </div>
        </Flex>

        <Flex className="flex pt-11 pb-11 items-center">
          <div className="w-[480px]">
            <p className="font-PlusJaka font-medium text-[16px] leading-[22px]">© 2022 TeeSpace. All rights reserved.</p>
          </div>
          <div className="w-[480px] m-auto">
            <Image imgsrc={paymentLogo} />
          </div>
          <div className="w-[480px] flex gap-x-10 justify-end">
              <IoLogoTwitter className="text-[24px] text-[#9B9B9B]" />
            <FaFacebookF className="text-[24px] text-[#9B9B9B]" />
            <FaInstagram className="text-[24px] text-[#9B9B9B]" />
            <CiYoutube className="text-[24px] text-[#9B9B9B]" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Footer;
