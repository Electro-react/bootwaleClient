// Product discription or Complete detail page
import React from "react";
import {Grid, Box} from "@mui/material"; // Grid version 1
import { useEffect, useState } from "react";

const Description = (props) => {
  const [data, setdata] = useState({});
  useEffect(() => {
    async function getData() {
      try {
        const result = await fetch("http://localhost:5000/allShoes");
        const rawFile = await result.json();
        setdata(rawFile[4]);
        // const ImageData = rawFile[0];
        // const Image = ImageData.ShoesImage[0];
        // setImage(Image);
        // console.log(ImageData);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  console.log(data);
  return (
    <Box sx={{ mt: "8rem", ml:"3rem" }}>
      <Grid container spacing={4} columns={{ sx: 4, sm: 8, md: 12 }}>
        <Grid sx={12} md={6}>
          image
        </Grid>
        <Grid sx={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Description;
