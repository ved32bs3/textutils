import React, {useState} from 'react'

export default function Textbox(props) {
  const [CopyBtn, setCopyBtn] = useState('Copy Text')

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  }

  const handleCopyClick = () => {
    let newText = document.getElementById('textArea'); // Selects the text in textarea as a variable
    newText.select(); // Selects that variable
    navigator.clipboard.writeText(newText.value); // Copies that variable to clipboard.
    setCopyBtn('Text Copied!!');
    setTimeout(() => {
      setCopyBtn('Copy Text');
    }, 1500);
  }

  const handleSpaClick = () => {
    let newText = text.split(/[ ]+/); // Declares about more tan 1 space between text.
    setText(newText.join(" ")); // Removes more than one spaces in text.
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // setText("Set Text"); - Correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <h2 className="my-2">{props.heading}</h2>
          <div className="mb-3">
            <label htmlFor="textArea" className="form-label">Edit your text to Uppercase, Lowercase and more with the buttons given below the textarea.</label>
            <textarea className="form-control border-2" id="textArea" rows="8" value={text} placeholder={props.placeholder} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'whitesmoke', color: props.mode==='dark'?'white':'black'}}></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>{CopyBtn}</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpaClick}>Remove extra spaces</button> 
        </div>  
      </div>
      <div className="container">
        <h2>Your typing summary:</h2>
        <p>{text.split(/\s/).filter((element) => {return element.length !== 0;}).length} words and {text.length} characters,
        <span> {0.008 * text.split(' ').filter((element) => {return element.length !== 0;}).length} Minutes to read. (Time taken to read is on average and is estimated.)</span></p>
        <h3>Preview:</h3>
        <p>{text===''?'Enter some text above to preview it here.':text}</p>
      </div>
    </>
  )
}
