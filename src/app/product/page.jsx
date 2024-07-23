"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import Title from "../components/Title";
import Container from "../components/Container";

const page = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-row items-center justify-center mx-auto px-4 py-10 font-sans text-center ">
          <Title text="Our Products" />
        </div>
        <Pagination />
      </Container>
      <Footer />
    </>
  );
};

export default page;
