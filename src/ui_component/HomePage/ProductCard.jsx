import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function ProductCard(props) {
  const [ShoesData, getShoesData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const result = await fetch("http://localhost:5000/allShoes");
        const rawFile = await result.json();
        getShoesData(rawFile);
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
  return (
    <ImageList
      cols={3}
      gap={4}
      sx={{ width: "90vw", marginLeft: "auto", marginRight: "auto" }}
    >
      {ShoesData.map((item) => (
         (item.Gender===props.gender|| props.gender==="all") && <ImageListItem key={item.id}>
            <img
              src={(() => {
              const ImageData = item.ShoesImage[0];
              if (ImageData) {
                const Imageseq = ImageData.base64;
                return Imageseq;
              }
              console.log(ImageData);
              })()}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
            />
            <ImageListItemBar sx={{fontSize:'5rem'}}
              title={item.ProductName}
              subtitle={<span>Price: {item.Price}</span>}
              position='below'
            />
          </ImageListItem>
      ))}
    </ImageList>
  );
}

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Breakfast",
//     author: "@bkristastucchio",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//     author: "@rollelflex_graphy726",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//     author: "@helloimnik",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//     author: "@nolanissac",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//     author: "@hjrc33",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//     author: "@arwinneil",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//     author: "@tjdragotta",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//     author: "@katie_wasserman",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//     author: "@silverdalex",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//     author: "@shelleypauls",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//     title: "Sea star",
//     author: "@peterlaster",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     title: "Bike",
//     author: "@southside_customs",
//   },
// ];
