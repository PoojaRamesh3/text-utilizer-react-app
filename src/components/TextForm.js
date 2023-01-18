import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let upperCase = text.toUpperCase();
    setText(upperCase);
  };

  const handleLowClick = () => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
  };

  const clear = () => {
    let clearText = "";
    setText(clearText);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState();

  return (
    <>
      <div className="mt-3 container">
        <h1 className="pb-3 fw-bold">{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          id="myText"
          onChange={handleChange}
          rows="15"
        ></textarea>
        <div className="d-flex justify-content-between pt-5">
          <button type="button" className="custom-btn" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button type="button" className="custom-btn" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button type="button" className="custom-btn wid" onClick={clear}>
            Clear Text
          </button>
        </div>
      </div>

      <div className="mt-5 container last-main">
        <h1>Summary</h1>
        <p>
          0{text?.split(" ").length} words containing 0{text?.length} characters
          converted into Uppercase Successfully!
        </p>
      </div>
    </>
  );
}
