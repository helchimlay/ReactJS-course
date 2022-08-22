import "./App.css"
import React, { Component } from "react"
import Word from "./Word"

class App extends Component {
  state = {
    words: [],
  }

  componentDidMount() {
    fetch("data/words.json").then((response) =>
      response.json().then((data) => {
        this.setState({
          words: data.words,
        })
      })
    )
  }

  render() {
    const words = this.state.words.map((word) => (
      <ul>
        <Word key={word.id} en={word.en} pl={word.pl} />
      </ul>
    ))
    return <div>{words}</div>
  }
}

export default App
