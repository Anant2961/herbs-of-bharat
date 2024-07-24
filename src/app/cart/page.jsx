import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import { store } from "../lib/store";
import Link from "next/link";
import FormattedPrice from "../components/FormattedPrice";
import AddToCartBtn from "../components/AddToCardBtn";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";

const page = () => {
  return (
    <>
      <Header />
      <Container></Container>
      <Footer />
    </>
  );
};

export default page;
