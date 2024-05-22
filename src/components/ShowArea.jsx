import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

function ShowArea() {
  return (
    <div className="ShowArea ">
      <h1 className="bulb text-6xl">
        <LightbulbIcon />
      </h1>
      <p className="text-2xl">Notes you add appear here!</p>
    </div>
  );
}

export default ShowArea;
