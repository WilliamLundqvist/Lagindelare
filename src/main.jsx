import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import { GroupsProvider } from "./context/GroupsContext.jsx";
import Groups from "./groups.jsx";
import App from "./App.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <GroupsProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </BrowserRouter>
  </GroupsProvider>
);
