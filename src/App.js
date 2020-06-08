import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { SketchPicker } from 'react-color';


function App() {
  const [mainColor, setMainColor] = useState('RGB(171, 86, 190)')
  const [secondColor, setSecondColor] = useState()
  const [thirdColor, setThirdColor] = useState()

  const handleChange = (color, event) => {
    setMainColor(`RGB(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`)
    console.log(color.rgb)
    let red = color.rgb.r
    let green = color.rgb.g
    let blue = color.rgb.b
    setSecondColor(`RGB(${green}, ${blue}, ${red})`)
    setThirdColor(`RGB(${blue}, ${red}, ${green})`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Pick a color to get started! </h1>
        <SketchPicker className="picker" color={mainColor} onChange={handleChange} />
        <div className="container">
          <div className="row">
            <div
              className="colorbox"
              style={{backgroundColor: mainColor}}
            >
            </div>
            <div
              className="colorbox"
              style={{backgroundColor: secondColor}}
            >
            </div>
            <div
              className="colorbox"
              style={{backgroundColor: thirdColor}}
            >
            </div>
          </div>
          <div className="row">
            <div className="colorlabel">
              <h6>Main Color:</h6>
            </div>
            <div className="colorlabel">
              <h6>Second Color:</h6>
            </div>
            <div className="colorlabel">
              <h6>Third Color:</h6>
            </div>
          </div>
          <div className="row">
            <div className="colorvalue">
              <p>{mainColor}</p>
            </div>
            <div className="colorvalue">
              <p>{secondColor}</p>
            </div>
            <div className="colorvalue">
              <p>{thirdColor}</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
