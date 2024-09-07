import React, { useEffect, useState } from "react";
import Person from "./TodoList";

function Greeting() {
  const [value, setValue] = useState(1);

  const addValue = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={addValue}>add value</button>
      <hr />
      <Person valuee={value}/>
    </div>
  );
}
export default Greeting;
