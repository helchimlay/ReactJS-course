import "./App.css"
import { useState, useEffect } from "react"

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    requestData()
  }, [])

  const requestData = () => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true)

    xhr.onload = () => {
      // console.log(xhr.status)
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response)
        setUsers(users)
      }
      // console.log(typeof users)
    }
    xhr.send(null)
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.address.city}</p>
        </div>
      ))}
    </div>
  )
}

export default App
