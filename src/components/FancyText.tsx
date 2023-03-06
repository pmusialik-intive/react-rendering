import './FancyText.css'

type Props = {
  text: string
}

const FancyText = (props: Props) => {
  console.log('Rendering FancyText...')

  return <span className="fancy-text">{props.text}</span>
}

export default FancyText
