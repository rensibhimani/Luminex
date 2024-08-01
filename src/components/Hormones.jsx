import React from "react";
import Hormones_women from "./Hormones_women";
import { Route, Routes } from "react-router-dom";

const Hormones = () => {
  return (
    <>
      
        <Routes>
          <Route path="/hormones-women" element={<Hormones_women />} />
          {/* <Route path="/hormones-men" element={<Hormones_men />} /> */}
        </Routes>
   
    </>
  );
};

export default Hormones;
