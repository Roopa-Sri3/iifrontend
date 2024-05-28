import React from "react";

function Infocard({ children, RRNo, primarySkill, secondarySkills }) {
  return (
    <div className="box">
      <div style={{ width: "61px", height: "23px", padding: "4px 10px", gap: "10px", borderRadius: "5px 0 0 0", opacity: "0", background: "#4595FF" }}>
        {children}
      </div>
    </div>
  );
}

export default Infocard;
