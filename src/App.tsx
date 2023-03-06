import './App.css'
import Child from './components/family/Child'
import Grandchild from './components/family/Grandchild'
import Parent from './components/family/Parent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Parent>
          <Child>
            <Grandchild></Grandchild>
          </Child>
        </Parent>
      </header>
    </div>
  )
}

export default App
