import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [page,setPage] = useState(1);
  const [data, setData] = useState();
  const apiKey = "a9e6df40c0cf4a9ba16cf12c161884db";

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=rich&from=2021-01-01&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{data,page,setPage}}>
      {props.children}
    </NewsContext.Provider>
  );
};
