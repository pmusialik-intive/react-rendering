import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import FancyText from './components/FancyText'
import Paragraph from './components/Paragraph'

function App() {
  console.log('Rendering App...')

  const [number, setNumber] = useState(0)

  const incrementNumber = () => {
    setNumber((prev) => prev + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <FancyText text={'React Rendering'} />
        <Paragraph text={`Current number is ${number}`} />
        <Button onClick={incrementNumber} text="Increment" />
      </header>
    </div>
  )
}

export default App
