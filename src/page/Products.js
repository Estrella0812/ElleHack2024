import React from "react";
import "./SearchResultList.css"

export default function Products({ result }) {
    const percentage = result.rating/5 * 100;
  return (
    <div className="ResultList">
    <div className="ProductExample">
        <img src={""} className="Logo" alt="logo" />
        <div className="websiteName">Product Name</div>
        <div className="Rating box">Rating : {result.rating}/5
            <div className="RatingGraph">
                <div className="fillIn" style={{width: `${percentage}%`}}></div>
            </div>
        </div>
        <div className="Price box">Price
            <div className="ListPrice">{result.price}</div>
        </div>
        <div className="Visit-container box">
            <div className="Visit">Visit Website</div>
        </div>
    </div>
    </div>
  );
}