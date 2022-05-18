import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarioPage1 from '../Projects/Mario/Pages/Page1/Page1';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mario1" element={<MarioPage1 />} />
      </Routes>
    </BrowserRouter>
  );
}