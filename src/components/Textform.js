import React , {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    // text = "Mihir" // wrnog way 
    // setText("Mihir");

    const handleUpClick = ()=> {
        // console.log("Upper Case Was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase !","success");
    }

    const handleLoClick = ()=> {
        // console.log("Upper Case Was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase !","success");
    }

    const handleClearClick = ()=> {
        // console.log("Upper Case Was Clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared !","success");
    }

    const handleOnChange = (event)=> {
        // console.log("On change");
        setText(event.target.value);

    }

    const handleCopy = () => {
        // console.log("I am copy");
        var text  = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied !" ,"success");
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);

        setText(newText.join(" "));
        props.showAlert("Extra spaces removed !","success");
    }
    return (
        <>
        <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#042743'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                 <textarea className="form-control" value= {text}  style={{backgroundColor : props.mode === 'light' ? 'white' : 'grey' , color : props.mode === 'dark' ? 'white' : '#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     
        </div>

        <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
          <h1>Your Text Summary</h1>
          <p> {text.length > 0 ? text.split(" ").length : 0} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes to read. </p>
           <h2>Preview</h2>
           <p>{text.length > 0 ? text : "Enter Something in textbox above to Preview it here."}</p>
        </div>
        </>
    )
}

