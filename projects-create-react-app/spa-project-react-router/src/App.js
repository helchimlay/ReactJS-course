import { Route, Routes, NavLink } from "react-router-dom"
import "./App.css"

const Home = () => <h1>Strona Startowa</h1>
const News = () => <h1>Aktualności</h1>
const Contact = () => <h1>Kontakt</h1>

const ErrorPage = () => <h1>Strona nie istnieje</h1>

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end>
                Start
              </NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <h1>STRONA</h1>
        <Routes>
          <Route path="/" end element={<Home />} errorElement={<ErrorPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
