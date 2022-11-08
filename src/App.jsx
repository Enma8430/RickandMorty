import { useState } from 'react'
import ConsuemerApi from './components/ConsuemerApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{background:'red  '}}>
      <ConsuemerApi/>
    </div>
  )
}

export default App
