class Omen extends React.Component {
  state = {
    text: "",
    omens: ["Pierwsza wróżba", "Druga wróżba", "Trzecia wróżba"],
    omen: null,
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleDrawing = () => {
    const number = Math.floor(Math.random() * this.state.omens.length)
    this.setState({
      omen: this.state.omens[number],
    })
  }

  handleAddOmen = () => {
    if (this.state.text === "") {
      return alert("wpisz coś!")
    } else {
      this.setState((previousState) => ({
        omens: [...previousState.omens, this.state.text],
        text: "",
      }))
    }
  }
  render() {
    return (
      <>
        <button onClick={this.handleDrawing}>Losuj wróżbę</button>
        <br />
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddOmen}>Dodaj wróżbę</button>
        <h2>{this.state.omen && this.state.omen}</h2>
      </>
    )
  }
}

ReactDOM.render(<Omen />, document.getElementById("root"))
