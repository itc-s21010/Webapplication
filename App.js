import React, { useState } from 'react'
import './App.css'

const INITIAL_COUNT = 0
const App = () => {
  const [count, setCount] = useState(INITIAL_COUNT)
  const countAdd = () => setCount(prevCount => prevCount + 1)
  const countSub = () => setCount(prevCount => prevCount - 1)
  const countReact = () => setCount(INITIAL_COUNT)
  return (
    <>
      <button onClick={countAdd}>ボタン +1</button>
      <button onClick={countSub}>ボタン -1</button>
      <button onClick={countReact}>リセット</button>
      <p>カウント:{count}</p>
    </>
  )
}

export default App
