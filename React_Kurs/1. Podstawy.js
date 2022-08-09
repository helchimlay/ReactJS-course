//PODSTAWY <><><><><><><>><><><><><><><><>

const header = <h1 className="title">Witaj na Stronie!</h1>

const classBig = "big"

const main = (
  <div>
    <h1 onClick={() => alert("Kliknięto")} className="red">
      Pierwszy artykuł
    </h1>
    <p>
      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    </p>
  </div>
)
const footer = (
  <footer>
    <p className={classBig}>Stopka</p>
  </footer>
)

const app = [header, main, footer]

ReactDOM.render(app, document.getElementById("root"))
