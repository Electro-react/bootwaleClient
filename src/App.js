import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Header from "./ui_component/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./ui_component/HomePage/Home";
import Blog from "./ui_component/Blog";
import AddShoes from "./ui_component/Add_shoes/AddShoes";
import React from 'react';
import Men from "./ui_component/Catagory/Man"
import Woman from "./ui_component/Catagory/Female"
import Kid from "./ui_component/Catagory/Kid";
import Children from "./ui_component/Catagory/Child";

// import ContextProvider from "./ui_component/Add_shoes/Context"
// import { ShoesContext } from "./ui_component/Add_shoes/Context";
// import { useState } from "react";

function App() {
  // const [sizes, setsizes] = useState({
  //   4: false,
  //   5: false,
  //   6: false,
  //   7: false,
  //   8: false,
  //   9: false,
  //   10: false,
  //   11: false,
  // });
  return (
    <>
      {/* <ContextProvider> */}
      {/* <ShoesContext.Provider value={{ sizes, setsizes }}> */}
      <Header />
      <Grid container>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Men' element={<Men />} />
          <Route exact path='/Women' element={<Woman />} />
          <Route exact path='/Children' element={<Children />} />
          <Route exact path='/kids' element={<Kid />} />
          <Route exact path='/Blog' element={<Blog />} />
          <Route exact path='/Add' element={<AddShoes />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </Grid>
      {/* </ContextProvider> */}
      {/* </ShoesContext.Provider> */}
    </>
  );
}

const NotFound = () => {
  return <div>404 error</div>;
};

export default App;
