"use client";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import BannerCategories from "./components/BannerCategories";
import HomeBanner from "./components/HomeBanner";

export default function Home() {
  return (
    <>
      <Header />
      {/* <Container>
        <p>Testing</p>
      </Container> */}
      <BannerCategories />
      <HomeBanner />
      <Footer />
    </>
  );
}
