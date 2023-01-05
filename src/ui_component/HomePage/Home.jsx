import React from "react";
import "./Home.scss";
import ProductCard from "./ProductCard";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <div className='imgslider'>
        <div id='container'>
          <img
            className='Img'
            src='homepage/img1.jpg'
            alt='shoes_image_slider'
          />
          <img
            className='Img'
            src='homepage/img2.jpg'
            alt='shoes_image_slider'
          />
          <img
            className='Img'
            src='homepage/img3.jpg'
            alt='shoes_image_slider'
          />
          <img
            className='Img'
            src='homepage/img4.jpg'
            alt='shoes_image_slider'
          />
        </div>
        <Typography
          variant='h2'
          sx={{ textAlign: "center", fontWeight: "bold", my: "6rem" }}
        >
          We will begin by learning how to tie our shoes
        </Typography>
        <ProductCard gender="all"/>
      </div>
    </>
  );
}
