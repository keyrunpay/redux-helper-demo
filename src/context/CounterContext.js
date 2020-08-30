import React from "react";
export const CounterContext = React.createContext();

function CounterProvider({ children }) {
  const [count, setCount] = React.useState(0);
  return <CounterContext.Provider value={[count, setCount]}>{children}</CounterContext.Provider>;
}

export default CounterProvider;
