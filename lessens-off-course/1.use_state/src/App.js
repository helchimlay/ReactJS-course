import "./App.css"
import React, { useState } from "react"

function App() {
  const [count, setCount] = useState(() => 0) //arrow function when using complex math or sth that takes "long" to render
  const [color, setColor] = useState({ name: "", value: "" })
  const { name, value } = color

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1)
    }
  }
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const handleColor = () => {
    setColor({ name: "white", value: "#ffff" })
  }
  return (
    <>
      <div className="app">
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
        <br />
        <br />
      </div>
      <button onClick={handleColor}>Show color</button>
      <span>{`${name} ${value}`}</span>
    </>
  )
}

export default App
