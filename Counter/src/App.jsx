import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // Hooks
  // Hooks are special JavaScript functions introduced in React
  // that allow functional components to use state and lifecycle features without writing class components
  let [counter, setCounter] = useState(20)

  //let counter = 5;

  const addValue = () => {
    console.log("Value Added", counter);
    //counter = counter + 1;
    setCounter(prevCounter => prevCounter+ 1);
    setCounter(prevCounter => prevCounter+ 1);
    setCounter(prevCounter => prevCounter+ 1);
    setCounter(prevCounter => prevCounter+ 1);
  }

  const removeVal = () => {
    setCounter(counter-1);
  }

  return(
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick={addValue}
    >Add Value{counter}</button><br/>

    <button
    onClick={removeVal}
    >Remove Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )

}

export default App
