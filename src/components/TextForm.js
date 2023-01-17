import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick =() =>{
    let upperCase = text.toUpperCase();
    setText(upperCase);
  }

  const handleLowClick =() =>{
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
  }

  const clear =() =>{
    let clearText = "";
    setText(clearText);
  }

  const handleChange = (event) =>{
    setText(event.target.value);
  }

  const [text, setText] = useState();

  return (
    <>
      
      <div className="mt-3 container">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} id="myText" onChange={handleChange} rows="10"></textarea>
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-primary mt-3 btn-dark" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mt-3 btn-dark" onClick={handleLowClick}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mt-3 btn-dark col-2" onClick={clear}>Clear Text</button>
        </div>
      </div>
      
      <div className="mt-5 container">
        <h1>Summary</h1>
        <p>0{text?.split(" ").length} words containing 0{text?.length} characters converted into Uppercase Successfully!</p>
      </div>
    </>
  );
}


