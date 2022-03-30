import React, { useState } from "react";

//compnent name should be in uppecase
//hooks must be used in function component body
// cannnot call conditonally

const UseStateBasics = () => {
  const [text, setText] = useState("random click"); // text is state initia value and setText is a function
  const handlesubmit = () => {
    setText("new title using usestate");
  };

  return (
    <div>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handlesubmit}>
        Change the title
      </button>
    </div>
  );
};
export default UseStateBasics;
