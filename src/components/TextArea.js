import React, { useState } from 'react'

export default function TextArea(props) {
  const handleUppercaseOnclick= ()=>{
    setText(text.toUpperCase());
  }
  const handleLowerCaseOnclick= ()=>{
    setText(text.toLowerCase());
  }
  const handleSpacesOnclick= ()=>{
    setText(text.replaceAll(' ',''));
  }

  const handleOnchange=(e)=>{
    setText(e.target.value)
  }
  const [text,setText]=useState("");


  return (
    <>
     <div className='container my-3'>
     <div style={{color:props.mode.color}}>
      <h1>Text Analyzer</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" onChange={handleOnchange} style={{color:props.mode.color,backgroundColor:props.mode.backgroundColor==='black'?'#9BABB8':'white'}}></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-1  my-1" onClick={handleUppercaseOnclick}>convert to uppercase</button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLowerCaseOnclick}>convert to lowercase</button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleSpacesOnclick}>Remove All white spaces</button>
      <p>No of words you have written are  {text===''?0:text.trim().split(/\s+/).length}</p>
      <p>Total characters written are {text.replaceAll(' ','').length} </p>
      </div>
      </div>

    
    </>
  
  )
}
