import React, { useState, useEffect } from "react";
import { getData } from "../lib/index";
import { config } from "../config";
import Container from "./Container";

const Categories = () => {
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
  return <Container></Container>;
};

export default Categories;
