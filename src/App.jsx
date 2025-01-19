/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0);

  const newFn = useCallback(()=>{},[])

  return (
    <>
    <Header newFn={newFn}></Header>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(prev=>prev+1)}}>Click here</button>
    </>
  )
}

export default App
