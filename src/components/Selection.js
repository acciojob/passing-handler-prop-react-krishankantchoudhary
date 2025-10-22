import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  // Each box maintains its own background color
  const [selectionStyle, setSelectionStyle] = useState({ background: "" });

  return (
    <div
      className="fix-box"
      style={selectionStyle} // apply the background dynamically
      onClick={() => applyColor(setSelectionStyle)} // change color on click
    >
    </div>
  );
};

export default Selection;
