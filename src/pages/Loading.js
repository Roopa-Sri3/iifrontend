import React from "react";
import "./Loading.css";

function Loading(){
  return(
    <div className="loader-container">
      <div className="loader"></div>
      <h6 className="loading-text">Loading...</h6>
    </div>
  );
}

export default Loading;
