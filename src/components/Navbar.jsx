import React from "react";
import Image from "./Image";
import logo from "../assets/images/logo.png"
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";

const Navbar = () => {
  return (
    <nav className="px-10 py-6">
      <Flex className="flex items-center">
        <div className="w-[737px]">
          <List className="flex gap-x-7">
            <ListItem
            className="text-[15px] font-PlusJaka font-bold"
            listname="Home"
            />
            <ListItem
            className="text-[15px] font-PlusJaka font-bold"
            listname="About"
            />
            <ListItem
            className="text-[15px] font-PlusJaka font-bold"
            listname="Print"
            />  
            <ListItem
            className="text-[15px] font-PlusJaka font-bold"
            listname="Our Team"
            />
          </List>
        </div>
      <div className="w-[378px] m-auto">
        <picture>
          <Image imgsrc={logo}/>
        </picture>
      </div>
      <div className="w-[737px]">

      </div>
      </Flex>
    </nav>
  );
};

export default Navbar;
