import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("calling useEffect");
    if (counter === 2) {
      alert("Counter is set to 2");
      setCounter(0);
    }
  }, [counter]);

  return (
    <div style={{ margin: "10rem" }}>
      <div>counter1: {counter}</div>
      <div>counter2: {counter2}</div>
      <button onClick={() => setCounter(counter + 1)}>Click Me!</button>

      <button onClick={() => setCounter(0)}>Reset</button>

      <button onClick={() => setCounter2(counter2 + 1)}>Click Me!</button>
      <button onClick={() => setCounter2(0)}>Reset</button>

      <button onClick={() => (window.location.href = "https://www.google.com")}>
        Goto Google
      </button>
    </div>
  );
};

export default Counter;
