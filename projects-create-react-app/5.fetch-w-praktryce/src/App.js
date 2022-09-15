import { useState } from "react"

import ButtonFetchUsers from "./components/ButtonFetchUsers"
import UsersList from "./components/UsersList"

const API = "https://randomuser.me/api/?results="

const App = () => {
  const [users, setUsers] = useState(null)

  const handleDataFetch = () => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          console.log(response)
          return response
        }
        throw Error(response.status)
      })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <ButtonFetchUsers click={handleDataFetch} />
      {users ? <UsersList users={users} /> : null}
    </div>
  )
}

export default App
