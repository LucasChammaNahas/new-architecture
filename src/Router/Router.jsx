import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventsPage1 from '../Projects/Events/Pages/EventsPage/EventsPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventsPage1 />} />
      </Routes>
    </BrowserRouter>
  );
}