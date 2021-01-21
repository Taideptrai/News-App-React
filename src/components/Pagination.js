import React, { useContext, useState } from "react";
import { NewsContext } from "../NewsContext";

function Pagination(props) {
  const {page,setPage} = useContext(NewsContext);
  const { data } = useContext(NewsContext);
  return (
    <div >
           <div className="pagination">
            { 
            data && [...Array(Math.ceil(data.articles.length/6)).keys()].map((item)=>(
                <button 
                className={`pagination_button ${(page === item+1)? "active": ""}`}
                onClick={()=>{setPage(item+1)}}>
                    {item+1}
                </button>
            ))
            }
            </div>
    </div>
  );
}

export default Pagination;
