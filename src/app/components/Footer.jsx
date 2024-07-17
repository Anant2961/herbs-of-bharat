import React from "react";
import Container from "./Container";
import { SiPaytm, SiGooglepay, SiGo } from "react-icons/si";
import { CgPaypal } from "react-icons/cg";
import { FaAmazonPay } from "react-icons/fa";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="mt-10">
      <FooterTop />
      <Container className="flex flex-col md:flex-row items-center gap-4 justify-between">
        <p>@Herbs-of-bharat All right reserved</p>
        <span className="flex flex-col md:flex-row gap-4 hover:cursor-pointer object-cover">
          <CgPaypal className="text-4xl " />
          <SiPaytm className="text-4xl" />
          <SiGooglepay className="text-4xl" />
          <FaAmazonPay className="text-4xl" />
        </span>
      </Container>
    </div>
  );
};

export default Footer;
