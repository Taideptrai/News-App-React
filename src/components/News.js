import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

function News(props) {
  const {data}  = useContext(NewsContext);
  const {page} = useContext(NewsContext);
  const pageSize = 6;
  return (
    <div>
      <h1 className="head__text">News App </h1>
      <div className="all__news">
        {data
          ? data.articles.filter((item, index) =>
            (index >= pageSize*(page-1) && index < pageSize*page)
           ).map((news,index) => (
            <div key={index} onClick={()=>{ window.open( 
              news.url, "_blank")}}>
              <NewsArticle data={news} key={news.url} />
            </div>
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;
