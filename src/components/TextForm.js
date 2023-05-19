import React, { useState } from 'react'

export default function TextForm(props) {

  //text to upper case
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  //text to lower case
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  //change text
  const handleOnChange = (event) => {
    // console.log("Onchange was clicked");
    setText(event.target.value);
  }

  //clear text
  const handleClear = () => {
    setText('')
  }

  //copy text
  const handleCopy = () => {
    let textCopy = document.getElementById('myBox');
    textCopy.select();
    navigator.clipboard.writeText(textCopy.value);
  }

  //remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  
  const [text, setText] = useState('');

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
