import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../lib/index";
import { config } from "../config";
import Container from "./Container";
import Carousel from "react-multi-carousel";
import { Link } from "next/link";
// import "react-multi-carousel/lib/styles.css";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";
import { CategoryProps } from "../types";
import PropTypes from "prop-types";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const BannerCategories = () => {
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
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        className="flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative"
        CustomLeftArrow={<CustomLeftArrow />}
        CustomRightArrow={<CustomRightArrow />}
      >
        {categories.map((category) => (
          <div
            key={category._id}
            className="flex items-center gap-x-2 p-1 border border-gray-100 mr-1 flex-1 rounded-md hover:border-skyText hover:shadow-lg"
          >
            <img
              src={category.image}
              alt="categoryImage"
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="text-sm font-semibold"> {category.name}</p>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default BannerCategories;
