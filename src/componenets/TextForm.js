import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new texxt";    // wrong way to change the state
  // setText("New Text");       // correct way to change the state

  return (
    <div>
      <div className="container">
        <h1>{props.haeding}</h1>
        <div className="mb-3">
          <textarea
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text} //using value
            id="myBox"
            rows="8"
            placeholder="Enter your text here"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Word and {text.length} characters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.toLowerCase()}</p>
      </div>
    </div>
  );
}
