import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // Fixed import from "react-router" to "react-router-dom"

import "./index.css";
import { GroupsProvider } from "./context/GroupsContext.jsx";
import Groups from "./pages/groups.jsx";
import App from "./pages/app.jsx";
import SlideShow from "./pages/SlideShow.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <GroupsProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/slideshow" element={<SlideShow />} />
      </Routes>
    </BrowserRouter>
  </GroupsProvider>
);
