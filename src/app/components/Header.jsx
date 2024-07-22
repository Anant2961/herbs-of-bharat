// "use client";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { FiStar, FiUser, FiShoppingCart } from "react-icons/fi";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import Container from "./Container";
import { getData } from "../lib/index";
import { config } from "../config";
import PropTypes from "prop-types";
import { CategoryProps } from "../types";
import Link from "next/link";

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
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        const data = await getData(endpoint);
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

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
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 font-semibold text-gray-300 hover:text-whiteText">
                Product <FaChevronDown className="text-base mt-1" />
              </MenuButton>
              <Transition
                enter="transition ease-out duration-75"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <MenuItems
                  anchor="bottom end"
                  className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50"
                >
                  {categories.map((category) => (
                    <MenuItem key={category._id}>
                      <Link
                        href="/category/${category._base}"
                        className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                      >
                        <img
                          src={category.image}
                          alt="categoryImage"
                          className="w-6 h-6 rounded-md"
                        ></img>
                        {category.name}
                      </Link>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Transition>
            </Menu>
            {bottomNavigation.map(({ title }) => (
              <p
                key={title}
                className="uppercase hidden md:inline-flex text-sm font-semibold test-whiteText/90 duration-200 relative overflow-hidden group"
              >
                {title}
                <span className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-500"></span>
              </p>
            ))}
          </Container>
        </div>
      </div>
    </>
  );
};

Header.PropTypes = {
  Category: PropTypes.arrayOf(PropTypes.shape(CategoryProps)).isRequired,
};

export default Header;