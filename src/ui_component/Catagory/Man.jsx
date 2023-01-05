import React from 'react'
import ProductCard from '../HomePage/ProductCard'
import {Box} from "@mui/material"

export default function Man() {
  return (
    <Box sx={{
  display: "flex",
  ml: "auto",
  mr: "auto",
  overflowX: "hidden",
  width: "auto",
  height: "800px",
}}><ProductCard  gender="male"/></Box>
  )
}
