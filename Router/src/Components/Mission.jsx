import React from "react";
import { useNavigate } from "react-router-dom";

function Mission() {
  const navigate = useNavigate();
  return (
    <>
      <div>Mission</div>
      <button onClick={() => navigate("/")}>geriye dön</button>
      {/* <button onClick={() => navigate(-1)}>geriye dön</button> */}
    </>
  );
}

export default Mission;
