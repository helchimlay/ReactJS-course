class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result,
  }

  handleClick = (type, number) => {
    if (type === "substraction") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result - number,
      }))
    } else if (type === "addition") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result + number,
      }))
    } else if (type === "reset") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: 0,
      }))
    }
  }

  render() {
    return (
      <>
        <MathButton
          name={"-1"}
          number={1}
          type={"substraction"}
          clickFunction={this.handleClick}
        />
        <MathButton
          name={"RESET"}
          number={1}
          type={"reset"}
          clickFunction={this.handleClick}
        />
        <MathButton
          name={"+1"}
          number={1}
          type={"addition"}
          clickFunction={this.handleClick}
        />
        <ResultPanel count={this.state.count} result={this.state.result} />
      </>
    )
  }
}

const MathButton = (props) => {
  return (
    <>
      <button onClick={() => props.clickFunction(props.type, props.number)}>
        {props.name}
      </button>
    </>
  )
}

const ResultPanel = (props) => {
  return (
    <>
      <h1>
        Liczba kliknięć: {props.count}{" "}
        {props.count > 10 ? <p>Oj duzo tych klikniec!</p> : null}
      </h1>
      <h1>Wynik: {props.result}</h1>
    </>
  )
}

ReactDOM.render(<Counter result={0} />, document.getElementById("root"))
