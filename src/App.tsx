import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Button from './components/Button'
import FancyText from './components/FancyText'
import Paragraph from './components/Paragraph'
import PersonData from './components/PersonData'

function App() {
  console.log('Rendering App...')

  const [number, setNumber] = useState(0)

  const incrementNumber = useCallback(() => {
    setNumber((prev) => prev + 1)
  }, [])

  const person = useMemo(() => {
    return {
      name: 'Paul',
      age: 31,
    }
  }, [])

  return (
    <div className="App">
      <FancyText text={'React Rendering'} />
      <Paragraph text={`Current number is ${number}`} />
      <Button onClick={incrementNumber} text="Increment" />

      <PersonData person={person} />
    </div>
  )
}

export default App
