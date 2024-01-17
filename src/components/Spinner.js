import React from "react";
import loading from "../loading.gif";
import "../App.css";

export function Spinner() {
  return (
    <div>
      <img id="gif" src={loading} width={"200px"} alt="loading" />
    </div>
  );
}

export default Spinner;
