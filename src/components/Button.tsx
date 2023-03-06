import { memo } from 'react'

interface Props {
  onClick: () => void
  text: string
}

const Button = (props: Props) => {
  console.log('Rendering Button...')

  return <button onClick={props.onClick}>{props.text}</button>
}

export default memo(Button)
