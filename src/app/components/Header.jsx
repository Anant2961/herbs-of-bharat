// "use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiStar, FiUser, FiShoppingCart } from "react-icons/fi";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import Container from "./Container";

const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blog" },
];

const Header = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="w-full bg:whiteText">
        <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 py-2 lg:px-0">
          <img src="assets/pro_logo.jpeg" alt="Mountains" className="w-24" />
          {/* search bar */}
          <div className="hidden md:inline-flex max-w-3xl w-full relative">
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              placeholder="Search products..."
              className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2"
            />
            {searchText ? (
              <IoClose
                onClick={() => setSearchText("")}
                className="absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200"
              />
            ) : (
              <IoSearchOutline className="absolute top-2.5 right-4 text-xl" />
            )}
          </div>
          {/* Menu */}
          <div className="flex items-center gap-x-6 text-2xl">
            <FiUser className="hover:text-skyText duration-200 cursor-pointer" />
            <div className="relative block">
              <FiStar className="hover:text-skyText duration-200 cursor-pointer" />
              <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
                0
              </span>
            </div>
            <div className="relative block">
              <FiShoppingCart className="hover:text-skyText duration-200 cursor-pointer" />
              <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
                0
              </span>
            </div>
          </div>
        </div>
        <div className="w-full bg-darkText text-whiteText">
          <Container className="py-2 max-w-4xl flex items-center gap-5 justify-between">
            <p className="flex items-center gap-2">
              Header <FaChevronDown />
            </p>
            {bottomNavigation.map(({ title }) => (
              <p
                key={title}
                className="uppercase hidden md:inline-flex text-sm font-semibold test-whiteText/90 duration-200 relative overflow-hidden group"
              >
                {title}
              </p>
            ))}
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;
