import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(90)
  const [bottles, setBottles] = useState(1.7)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState('male')
  const [bac, setBAC] = useState(0)

  const calculate = () => {
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    let result 

    let gramsLeft = grams - (burning * time)
    
    if (gramsLeft < 0) {
      gramsLeft = 0;
    }


    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7)
    } else {
      result = gramsLeft / (weight * 0.6)
    }

    
    if (result < 0) {
      result = 0;
    }

    setBAC(result.toFixed(2))
  }

  //luo public repo ilman tiedostoja
  //git remote and origin https://
  //git add .
  //git commit -m "Viesti"
  //git push -m tai -w (en nää lukee) origin main

  return (
    <div id="container">
      <h3>Calculating alcohol blood level</h3>
    <div>
    <label>Weight</label>
    <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
    </div>
    <div>
      <label>Bottles</label>
      <select value={bottles} onChange={e => setBottles(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <div>
    <label>Time</label>
      <select value={time} onChange={e => setTime(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <div>
      <label>Gender</label>
      <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
      <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
    </div>
    <div>
      <label>Result</label>
      <output>{bac}</output>
    </div>
    <div>
      <button type="button" onClick={calculate}>Calculate</button>
    </div>
    </div>
  );
}

export default App;