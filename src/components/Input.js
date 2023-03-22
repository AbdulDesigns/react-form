import React, { useState } from "react";
import "../styles/inputStyles.css";

const Input = ({ labelName, name, id, placeholder, type }) => {
  const [inputText, setInputText] = useState("");

  //input data handler
  const inputDataHandler = (e) => {
    const valueUpdater = e.target.value;
    setInputText(valueUpdater);
  };

  return (
    <>
      <div className="inputContainer">
        <label className="label" htmlFor={id}>
          {labelName}
        </label>

        <input
          className="textInput"
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={inputDataHandler}
        />
      </div>
    </>
  );
};

export default Input;
