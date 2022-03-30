import React from "react";

const Error = () => {
  let title = "random title";
  const handleonClick = () => {
    title = "hello world";
    console.log(title);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleonClick}>
        Change the title
      </button>
    </div>
  );
};

export default Error;
