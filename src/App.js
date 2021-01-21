import React, { createContext, useEffect, useState } from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./app.css";
import Pagination from "./components/Pagination";

function App() {
  return (
    <NewsContextProvider>
      <News />
      <Pagination />
    </NewsContextProvider>
  );
}

export default App;
