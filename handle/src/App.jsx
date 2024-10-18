import { useState } from 'react'
import './App.css'
import MouseClicker from './MouseClicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MouseClicker></MouseClicker>
    </>
  )
}

export default App
