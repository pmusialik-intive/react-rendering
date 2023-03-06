import { useState } from 'react'
import ButtonWithText from '../Button'
import Child from './Child'
import Grandchild from './Grandchild'

const ParentWithWholeFamily = () => {
  console.log('Rendering ParentWithWholeFamily...')

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

      <ButtonWithText onClick={incrementNumber} text="Increment" />
      <Child>
        <Grandchild></Grandchild>
      </Child>
    </div>
  )
}

export default ParentWithWholeFamily
