type Props = {
  text: string
}

const Paragraph = (props: Props) => {
  console.log('Rendering Paragraph...')
  return <p>{props.text}</p>
}

export default Paragraph
