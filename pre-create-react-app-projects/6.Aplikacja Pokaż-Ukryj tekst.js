class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msgIsActive: false,
    }
    this.handleMsgClick = this.handleMsgClick.bind(this)
  }

  handleMsgClick() {
    this.setState({
      msgIsActive: !this.state.msgIsActive,
    })
  }

  render() {
    const text =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus autem, nisi debitis dolorum at ipsa a, tenetur nemo dicta, voluptate sunt ab iure ea accusamus voluptatum nulla fuga modi."

    return (
      <>
        <button onClick={this.handleMsgClick}>
          {this.state.msgIsActive ? "Ukryj" : "Pokaż"}
        </button>
        {this.state.msgIsActive && <p>{text}</p>}
      </>
    )
  }
}
ReactDOM.render(<Message />, document.getElementById("root"))
