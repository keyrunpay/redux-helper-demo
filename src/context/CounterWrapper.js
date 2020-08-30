import React from "react";
import CounterProvider from "./CounterContext";
import CounterConsumer from "./CounterConsumer";

function CounterWrapper() {
  return (
    <div>
      <CounterProvider>
        <CounterConsumer />
      </CounterProvider>
    </div>
  );
}

export default CounterWrapper;
