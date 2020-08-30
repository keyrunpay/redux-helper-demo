import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { customAction } from "redux-helper-np";

let count = 0;
function CustomAction() {
  const state = useSelector((state) => state.custom);
  const dispatch = useDispatch();

  const customActionFunction = (state) => {
    count++;
    return {
      ...state,
      text: "Updated text " + count,
      clonedText: "Updated Cloned text" + count,
    };
  };

  return (
    <div>
      <h3>Text: {state.text}</h3>
      <h3>Cloned Text: {state.clonedText}</h3>

      <br />
      <button
        onClick={() => {
          dispatch(customAction("custom", customActionFunction));
        }}
      >
        Change Text
      </button>
    </div>
  );
}

export default CustomAction;
