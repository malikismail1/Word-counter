import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    let textBox = document.getElementById("myBox");
    textBox.select();
    navigator.clipboard.writeText(textBox.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
  };

  const handleClear = () => {
    setText('');
    props.showAlert("Text cleared", "success");
  };

  const solidBlueStyle = {
    backgroundColor: '#0047ab',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin: '4px',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <>
      <div>
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          <h1 className="mb-4">{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
            color: props.mode === 'dark' ? 'white' : '#042743' }} value={text} onChange={handleOnChange}id="myBox"rows="8"> 
                </textarea>
            <button disabled={text.length === 0} style={solidBlueStyle} onClick={handleUpClick} >Convert to Uppercase </button>
            <button disabled={text.length === 0} style={solidBlueStyle} onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} style={solidBlueStyle} onClick={handleCopy}> Copy Text </button>
            <button disabled={text.length === 0} style={solidBlueStyle} onClick={handleClear} >Clear Text </button>
          </div>
        </div>
        <div className="container my-3"  style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          <h1>Your Text Summary</h1>
          <p>{ text.trim().split(/\s+/).filter((element) => element.length !== 0).length}{' '}
            words and {text.length} characters </p>
          <p>{( 0.008 *text.trim().split(/\s+/).filter((element) => element.length !== 0).length).toFixed(2)}{' '}</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
        </div>
      </div>
    </>
  );
}
