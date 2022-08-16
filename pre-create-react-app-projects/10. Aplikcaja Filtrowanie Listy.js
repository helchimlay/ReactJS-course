const data = {
  users: [
    { id: 1, age: 18, name: "Jakub", sex: "male" },
    { id: 2, age: 17, name: "Kamilka", sex: "female" },
    { id: 3, age: 43, name: "Monika", sex: "female" },
    { id: 4, age: 23, name: "Adrian", sex: "male" },
    { id: 5, age: 25, name: "Arek", sex: "male" },
    { id: 6, age: 62, name: "Marcelina", sex: "female" },
  ],
}
//components//
const UserItem = (props) => {
  return (
    <div className="user-info">
      <h2>{props.user.name}</h2>
      <p>Informacje o użytkowniku:</p>
      <p>Wiek: {props.user.age}</p>
      <p>Płeć: {props.user.sex}</p>
    </div>
  )
}

//main component//
class PersonList extends React.Component {
  state = {
    selectedSex: "all",
  }

  //handlers//
  handleUserFilter = (sex) => {
    this.setState({
      selectedSex: sex,
    })
  }

  renderUsersList = () => {
    let users = this.props.data.users
    switch (this.state.selectedSex) {
      case "male":
        users = users.filter((user) => user.sex === "male")
        return users.map((user) => <UserItem user={user} key={user.id} />)
      case "female":
        users = users.filter((user) => user.sex === "female")
        return users.map((user) => <UserItem user={user} key={user.id} />)
      case "all":
        return users.map((user) => <UserItem user={user} key={user.id} />)
    }
  }

  render() {
    return (
      <>
        <button onClick={this.handleUserFilter.bind(this, "female")}>
          Pokaż kobiety
        </button>
        <button onClick={this.handleUserFilter.bind(this, "all")}>
          Pokaż wszytkich
        </button>
        <button onClick={this.handleUserFilter.bind(this, "male")}>
          Pokaż mężczyzn
        </button>
        {this.renderUsersList()}
      </>
    )
  }
}

ReactDOM.render(<PersonList data={data} />, document.getElementById("root"))
