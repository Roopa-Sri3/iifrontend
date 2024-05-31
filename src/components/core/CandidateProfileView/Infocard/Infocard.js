import React from "react";
import cx from "classnames";
import "./Infocard.css";

const Infocard = ({text,background}) =>
  (
    <div className= {cx("box",background)}>
      {text}
    </div>
  );
export default Infocard;
