class App extends React.Component {
  state = {
    text: "",
  }

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
      inputValue: e.target.value,
    })
  }
  handleResetClick = () => {
    this.setState({
      text: "",
    })
  }

  render() {
    return (
      <>
        <input
          value={this.state.text}
          placeholder="Wpisz coś..."
          onChange={this.handleInputChange}
          type="text"
        />
        <button onClick={this.handleResetClick}>Reset</button>
        <h1 className="title">{this.state.text}</h1>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
