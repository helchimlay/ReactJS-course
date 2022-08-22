import React from "react"
import "./Word.css"

const Word = (props) => {
  return (
    <li>
      Słowo po polsku: <strong>{props.pl}</strong>
      <br />
      Tłumaczenie: <strong>{props.en}</strong>
    </li>
  )
}

export default Word
