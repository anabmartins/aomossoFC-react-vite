import { useState } from 'react'
import aomosso from '../public/aomosso.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={aomosso} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Almoço FC</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          aomossos: {count}
        </button>
      </div>
      <p className="read-the-docs">
        ja pode aomossar?
      </p>
    </>
  )
}

export default App
