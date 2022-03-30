import React, { useState } from "react";
import { data } from "./data";

const UseStatearray1 = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    console.log("testing id", id);
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>

            <button className="btn" onClick={() => removeItem(id)}>
              clear item
            </button>
          </div>
        );
      })}

      <button className="btn" onClick={() => setPeople([])}>
        clear item
      </button>
    </div>
  );
};

export default UseStatearray1;
