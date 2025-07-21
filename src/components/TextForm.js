import React, { useState } from 'react';

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase ","Success")

  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
     props.showAlert("Converted to lowercase ","Success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleCopy = () => {
    var textBox = document.getElementById("myBox");
    textBox.select();
    navigator.clipboard.writeText(textBox.value);
    document.getSelection().removeAllRanges();
    props.showAlert("copy to clipboard","Success")
  }

  const handleClear = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text clear","Success")
  }

  const [text, setText] = useState('');

  return (
    <>
      <div>
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          <h1 className='mb-4'> {props.heading}</h1>
          <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea
              className="form-control"
              style={{
                backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                color: props.mode === 'dark' ? 'white' : '#042743'
              }}
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            ></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button  disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
          </div>
        </div>

        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          <h1>Your text Summary</h1>
          {/* .length-1 } words and {1000+text.length-1000} characters */}
          <p>{text.split(" ").filter((element) => {element.length !== 0}).length}
            words and {text.length} characters </p>
          <p>{0.008 * text.split(" ").filter((element) => {element.length !== 0}).length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
      </div>
    </>
  );
}