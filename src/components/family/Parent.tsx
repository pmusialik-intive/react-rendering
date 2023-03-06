import { useState } from 'react'
import Button from '../Button'

interface Props {
  children?: React.ReactNode
}

const Parent = (props: Props) => {
  console.log('Rendering Parent...')

  const [number, setNumber] = useState(0)

  const incrementNumber = () => {
    setNumber((prev) => prev + 1)
  }

  return (
    <div
      style={{
        border: '1px solid white',
        display: 'flex',
        padding: '1rem',
        flexDirection: 'column',
      }}
    >
      <span>Parent, number: {number}</span>

      <Button onClick={incrementNumber} text="Increment" />

      {props.children}
    </div>
  )
}

export default Parent
