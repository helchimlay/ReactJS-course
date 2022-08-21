//import React from "react"

const SwitchButton = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.active ? "Stop" : "Start"}
    </button>
  )
}

export default SwitchButton
