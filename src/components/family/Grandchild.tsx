const Grandchild = () => {
  console.log('Rendering Grandchild...')

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
      Grandchild
    </div>
  )
}

export default Grandchild
