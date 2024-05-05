import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handlechangeClick = ()=>{
    let newText = '';
    setText(newText)
  }

  const handleOnchange = (event)=>{
    // console.log("on change");
    setText(event.target.value);
  }
  const[text , setText] = useState('Enter text here');
  return (
    <>
    <div className ="container" style={{backgroundColor: props.mode === 'dark'?'white':'#042743'}}>
      <h1>{props.heading }</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color : props.mode === 'dark' ? 'white' : '#042743'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Covert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handlechangeClick}>Clear Text</button> 
      </div>
      <div className="container my-2"  style={{backgroundColor: props.mode === 'dark'?'white':'black'}} >
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length }Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"enter smthng in text to preview it here"}</p>
      </div>
      </>
  )
}
