import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const LinkButton = ({ showButton, link, className }) => {
  const newClassName = twMerge(
    "bg-darkText/80 hover:bg-darkText text-whiteText py-2.5 px-6 rounded-full flex items-center gap-2 duration-200",
    className
  );
  return (
    <Link href={link ? link : "/products"} className={newClassName}>
      {showButton && <FaArrowLeft />} start shopping
    </Link>
  );
};

export default LinkButton;
