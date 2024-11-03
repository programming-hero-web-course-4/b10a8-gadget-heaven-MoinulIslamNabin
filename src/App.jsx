import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto bg-green-400">
        <h3 className="text-5xl text-center text-black">hello react router</h3>
      </div>
    </>
  )
}

export default App
