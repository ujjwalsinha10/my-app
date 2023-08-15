import React ,{useState}from 'react'

export default function TextForm(props) {
  const handleUpperCaseClick = ()=>{
    console.log('Upper case was clicked');
    let newText= text.toUpperCase();
    setText(newText);
  }

  const handleLowerCaseClick = ()=>{
    console.log('Upper case was clicked');
    let newText= text.toLowerCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    console.log('handleOnChange was clicked');
    setText(event.target.value);
  }

  const handleClear=(event)=>{
    setText('');
  }
  const handleCopy=()=>{
    console.log('handleCopy was clicked');
    var text= document.getElementById("myBox");
    console.log(text.value);
    text.select();
    navigator.clipboard.writeText(text.value);
    // setText(event.target.value);
  }
    const [text, setText]=useState('');
    return (
      <>
      <div>
          <div className={`text-${props.mode==='light'?'dark':'light'} mb-3`}>
              <h1>{props.heading }</h1>
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
          </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpperCaseClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className={`text-${props.mode==='light'?'dark':'light'} container my-2`}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <div classname="card">
          <div className="cardbody">
            <h3>Preview</h3>
          </div>
        </div>
        
        <p>{text.length>0?text:"Enter something to Preview"}</p>
      </div>
      </>
  )
}
