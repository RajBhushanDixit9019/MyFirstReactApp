import React, { useState } from "react";
import "./App.css";

export default function GreetUser() {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const greetUser = () => {
    alert(`Hello, ${name}!`);
    
  };

  return (
    <div className="form-container">
      <label htmlFor="username" className="form-label">
        Name:
      </label>
      <input
        type="text"
        id="username"
        className="form-input"
        placeholder="Your Name..."
        value={name}
        onChange={handleInputChange}
      />
      <button className="form-button" onClick={greetUser}>
        Submit
      </button>
    </div>
  );
}
