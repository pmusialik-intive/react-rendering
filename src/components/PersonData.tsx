import { memo } from 'react'
import { Person } from '../data/Person'

interface Props {
  person: Person
}

const PersonData = (props: Props) => {
  console.log('Rendering PersonData...')

  return (
    <>
      {Object.values(props.person).map((value, index) => (
        <span key={`${index}_${value}`}>{value}</span>
      ))}
    </>
  )
}

export default memo(PersonData)
