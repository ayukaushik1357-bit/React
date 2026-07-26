import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

// Props component ko reusable banata ha
// Props are basically Properties

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Ayush",
    age:21
  }

  let myArr = [1,2,3];

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl' style={{ color: 'black' }}>
        Tailwind Test
      </h1>

      <Card username="chai" someObj = {myObj} someArr = {myArr}/>
      <Card username="Ayush" btnText="visit me"/>

    </>
  )
}

export default App
