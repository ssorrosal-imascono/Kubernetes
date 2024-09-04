import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

async function getElements() {
  try {
    const response = await axios.get('https://backend-node.imascono.com/list');
    return response.data;
  } catch (error) {
    console.error('Error fetching elements:', error);
    throw error;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const elements = await getElements();
        setList(elements);
      } catch (error) {
        console.error('Error fetching the list', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <ul>
        {list.length > 0 ? (
          list.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </>
  )
}

export default App
