import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  //count siempre va a cambiar
  //setCount siempre lo va a hacer cambiar
  const [count, setCount] = useState(0)


  useEffect(() => {
    document.title = `You clicked ${count} times`
    console.log('useEffect')
  }, [count])

  return (
    <div className="App">
      <Navbar />
      <Main prop={'Hola Mundo'}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> count is: {count}</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            +1
          </button>
          <button type="button" onClick={() => setCount((count) => count - 1)}>
            -1
          </button>
          <button type="button" onClick={() => setCount((count) => count = 0)}>
            reset
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
