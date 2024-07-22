import React from "react";
import Container from "./Container";
import Title from "./Title";
import Link from "next/link";
import Pagination from "./Pagination";

const Productlist = () => {
  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <Title text="Our Products" />
          <Link href="/product"> All our products</Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3"></div>
      </div>
      <Pagination />
    </Container>
  );
};

export default Productlist;
