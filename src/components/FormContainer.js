import React, { useState } from "react";
import Input from "./Input";
import avatar from "../images/avatar.png";
import "../styles/inputStyles.css";

const FormContainer = () => {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <div className="mainContainer">
        {/* form header with illustration */}

        <div className="heading">
          <img src={avatar} alt="avatar" />
          <h3>Payment Info</h3>
        </div>
        <form action="#">
          <Input
            labelName="User Name"
            id="userName"
            name="name"
            type="text"
            placeholder="Enter user name"
          />
          <Input
            labelName="Credit Card Number"
            id="card"
            name="Credit"
            type="text"
            placeholder="4563-xxxx-xxxx"
          />
          <div className="inputCombo">
            <Input
              labelName="Expiry"
              id="expiry"
              name="expiry"
              type="text"
              placeholder="yyyy-mm"
            />
            <Input
              labelName="cvv"
              id="cvv"
              name="cvv"
              type="number"
              placeholder="0xx"
            />
          </div>
          <button type="submit">checkout</button>
        </form>
      </div>
    </>
  );
};

export default FormContainer;
