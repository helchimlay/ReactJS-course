import "./App.css"
import React, { Component } from "react"

//Pseudo rosnąca baza danych
const data = [
  {
    id: 1,
    title: "Wiadomość numer 1",
    body: "Zawartość wiadomości numer 1 ...",
  },
  {
    id: 2,
    title: "Wiadomość numer 2",
    body: "Zawartość wiadomości numer 2 ...",
  },
]

setInterval(() => {
  const index = data.length + 1
  data.push({
    id: index,
    title: `Wiadomość numer ${index}`,
    body: `Zawartość wiadomości numer ${index} ...`,
  })
  console.log(data)
}, 3000)

class App extends Component {
  state = { comments: [...data] }

  getData = () => {
    if (this.state.comments.length !== data.length) {
      console.log("aktualizacja")
      this.setState({
        commetns: [...data],
      })
    } else console.log("dane takie same-nie aktualizuje")
  }

  componentDidMount() {
    this.idI = setInterval(this.getData, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.idI)
  }

  render() {
    const comments = this.state.comments.map((comment) => (
      <div key={comment.id}>
        <h3>{comment.title}</h3>
        <p>{comment.body}</p>
      </div>
    ))
    return <div>{comments}</div>
  }
}

export default App
