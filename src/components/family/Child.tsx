interface Props {
  children?: React.ReactNode
}

const Child = (props: Props) => {
  console.log('Rendering Child...')
  
  return (
    <div
      style={{
        border: '1px solid white',
        display: 'flex',
        padding: '1rem',
        margin: '1rem',
        flexDirection: 'column',
      }}
    >
      <span>Child</span>
      {props.children}
    </div>
  )
}

export default Child
