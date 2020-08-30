import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateState } from "redux-helper-np";

function Counter() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Count: {state.count}</h3>
      <br />
      <button
        onClick={() => {
          dispatch(updateState("counter", { count: state.count + 1 }));
        }}
      >
        Increase
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(updateState("counter", { count: state.count - 1 }));
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;
