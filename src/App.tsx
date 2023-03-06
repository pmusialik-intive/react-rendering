import './App.css'
import Child from './components/family/Child'
import Grandchild from './components/family/Grandchild'
import Parent from './components/family/Parent'

function App() {
  console.log('Rendering App...')

  return (
    <div className="App">
      <Parent>
        <Child>
          <Grandchild></Grandchild>
        </Child>
      </Parent>
    </div>
  )
}

export default App
