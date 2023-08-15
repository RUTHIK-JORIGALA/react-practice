import React, { useState } from 'react';

function TextBox(props){
    const change = (event) =>{
        settext(event.target.value);
    }
    const toUpper =()=>{
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Text converted to upperCase","success")
    }
    const toLower = ()=>{
        let newText = text.toLowerCase();
        settext(newText);
        props.showAlert("Text converted to lowerCase ","success")
    }
    const copy = () =>{
        var text =document.getElementById('box');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success")
    }
    const clear = ()=>{
        settext("");
        props.showAlert("Text Box is Cleared","success")
    }
    const removeExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showAlert("Extra Spaces are removed ","success")
    }
    const [text, settext] = useState("");
    return(
        <div className="container" style={{color:props.mode ==='light'?'white':'black'}}>
            <h1 className='text-center'>{props.heading}</h1>
            <div className="form-floating my-3">
                <textarea id='box' rows="8" cols={100} placeholder="Enter the Text to transform " value={text} onChange={change} style={{background:props.mode ==='light'?'gray':'white',color:props.mode ==='light'?'white':'black',border:'2px solid black', width:"100%"}} ></textarea>  
            </div>
            <button type="button" className="btn btn-primary mx-1"onClick={toUpper}>ToUpperCase</button>
            <button type="button" className="btn btn-primary mx-1"onClick={toLower}>ToLowerCase</button>
            <button type="button" className="btn btn-primary mx-1"onClick={clear}>Clear</button>
            <button type="button" className="btn btn-primary mx-1"onClick={copy}>Copy</button>
            <button type="button" className="btn btn-primary mx-1"onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <div>
                <h1>Summary</h1>
                <p>{text.trim().split(" ").length} words {text.length} Characters</p>
                <h3>Preview</h3>
                <p>{text?text:"Enter somenthing to display"}</p>

            </div>
        </div>
    )
}
export default TextBox