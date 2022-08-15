const Person = (props) => {
  return (
    <li>
      <span>{props.name} </span>
      <button onClick={props.handleRemove}>usuń</button>
    </li>
  )
}

class List extends React.Component {
  state = {
    persons: [
      { id: 1, name: "Kamil K." },
      { id: 2, name: "Arkadiusz S." },
      { id: 3, name: "Darek L." },
      { id: 4, name: "Paweł R." },
      { id: 5, name: "Monika O." },
    ],
  }

  handleRemove = (id) => {
    const persons = this.state.persons.filter((person) => {
      return person.id != id
    })
    this.setState({
      persons,
    })
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            handleRemove={(e) => this.handleRemove(e, person.id)}
          />
        ))}
      </ul>
    )
  }
}

ReactDOM.render(<List />, document.getElementById("root"))
