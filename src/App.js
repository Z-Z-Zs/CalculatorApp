import React, { useState } from "react";
import * as math from "mathjs";
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { evaluate } from "mathjs";


const App = () => {

  const [result, setResult] = useState("");
  const [text, setText] = useState("");

  const addToText = (val) => {
    setText((text) =>[...text, val + " "]);
  };

  const resetInput = ()=>{
    setText("");
    setResult("");
  }

  const calculateResult = () => {
    const input = text.join("") // remove commas and space

    setResult(math.evaluate(input));
  }

  const buttonColor = "#32502E";

  return (
    <div className="App">
      <div className="calc-wrapper">
          <Input text={text} result={result}/>
        <div className="row">
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="/" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="*" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="+" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="=" handleClick={calculateResult}/>
          <Button symbol="-" color={buttonColor}/>
        </div>
        <Button symbol="clear" color="#781D42" handleClick={resetInput}/>
      </div>
    </div>
  );
}

export default App;
