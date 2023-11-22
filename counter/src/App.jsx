import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = (action) => {
    if (action === "increment") {
      setCount(count + 1);
    } else if (action === "decrement") {
      setCount(count - 1);
    } else if (action === "decrementFive") {
      setCount(count - 5);
    } else if (action === "incrementFive") {
      setCount(count + 5);
    }
  };

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          handleClick("increment");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          handleClick("decrement");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          handleClick("incrementFive");
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          handleClick("decrementFive");
        }}
      >
        -5
      </button>
    </div>
  );
}

export default App;
