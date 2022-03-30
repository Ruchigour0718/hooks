import React, { useState } from "react";
import { data } from "./data";

const UseStatearray = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>
          </div>
        );
      })}

      <button className="btn" onClick={() => setPeople([])}>
        clear item
      </button>
    </div>
  );
};

export default UseStatearray;
