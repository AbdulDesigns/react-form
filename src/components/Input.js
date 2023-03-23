import React, { useState } from "react";
import "../styles/inputStyles.css";

const Input = ({ labelName, name, id, placeholder, type }) => {
  const [inputText, setInputText] = useState({
    name: "",
    credit: "",
    expiry: "",
    cvv: "",
  });

  const [records, setRecords] = useState([]);

  //input data handler
  //getting the name of specified field
  const inputDataHandler = (e) => {
    const valueUpdater = e.target.value;
    const nameUpdater = e.target.name;
    setInputText({ ...inputText, [nameUpdater]: valueUpdater });
  };

  //injecting the stored data to the UI
  const submitHandler = (e) => {
    e.preventDefault();
    //spreading the values by creating a new value
    const newRecord = { ...inputText, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);
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
          onSubmit={submitHandler}
        />
      </div>
    </>
  );
};

export default Input;
