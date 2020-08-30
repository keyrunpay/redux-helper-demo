import React from "react";
import { CounterContext } from "./CounterContext";

function CounterConsumer() {
  const [count, setCount] = React.useContext(CounterContext);

  return (
    <div>
      <p>Count: {count}</p>
      <br />
      <button
        onClick={() => {
          setCount((pC) => pC + 1);
        }}
      >
        Increase
      </button>
      <br />
      <button
        onClick={() => {
          setCount((pC) => pC - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default CounterConsumer;
