import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarioPage1 from '../Projects/Mario/Pages/Page1/Page1';
import MarioPage2 from '../Projects/Mario/Pages/Page2';
import MarioPage3 from '../Projects/Mario/Pages/Page3';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mario1" element={<MarioPage1 />} />
        <Route path="/mario2" element={<MarioPage2 />} />
        <Route path="/mario3" element={<MarioPage3 />} />
      </Routes>
    </BrowserRouter>
  );
}