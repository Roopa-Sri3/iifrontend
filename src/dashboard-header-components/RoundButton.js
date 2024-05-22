import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GetProfileShortcutName } from "../store/selector/app";
import "./RoundButton.css";

const RoundButton = ({ onLogout }) => {
  const [isLogout] = useState(false);
  const profileShortcut = useSelector(GetProfileShortcutName);

  return (
    <div>
      <button
        className={`round-button ${isLogout ? "logout" : ""}`}
      >
        {profileShortcut}
      </button>
    </div>
  );
};

export default RoundButton;
