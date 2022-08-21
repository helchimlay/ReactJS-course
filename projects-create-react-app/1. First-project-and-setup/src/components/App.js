import "../components/App.css"
import SwitchButton from "./SwitchButton"
import React, { Component } from "react"

class App extends Component {
  state = { time: 0, active: false }

  handleClick = () => {
    if (this.state.active) {
      clearInterval(this.idInterval)
    } else {
      this.idInterval = setInterval(() => this.addSecond(), 10)
    }

    this.setState({
      active: !this.state.active,
    })
  }

  addSecond = () => {
    this.setState({
      time: this.state.time + 0.01,
    })
  }

  render() {
    return (
      <>
        <p>{this.state.time.toFixed(2)}</p>
        <SwitchButton
          handleClick={this.handleClick}
          active={this.state.active}
        />
      </>
    )
  }
}

export default App
