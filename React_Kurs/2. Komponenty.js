//Komponent funkcyjny, bezstanowy

const Header = () => {
  return <h1>Witaj na stronie</h1>
}

//Komponent klasowy, stanowy

class Blog extends React.Component {
  // state = {
  //   number: 0,
  // }

  render() {
    return (
      <section>
        <h2>Artykuł</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum et
          architecto cum eligendi, ipsam, commodi inventore possimus facilis
          perspiciatis voluptas perferendis nemo magni dolorem. Ducimus ut
          maiores quis perspiciatis quidem!
        </p>
      </section>
    )
  }
}

const App = () => {
  return (
    <>
      <Header />
      <Blog />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
