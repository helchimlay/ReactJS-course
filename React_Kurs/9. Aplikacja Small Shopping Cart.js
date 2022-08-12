class App extends React.Component {
  state = { shoppingCartItems: 1, avaliableProducts: 10 }

  handleSubtraction = () => {
    this.setState({
      shoppingCartItems: this.state.shoppingCartItems - 1,
    })
  }

  handleAddition = () => {
    this.setState({
      shoppingCartItems: this.state.shoppingCartItems + 1,
    })
  }
  handleBuy = () => {
    this.setState({
      shoppingCartItems: 0,
      avaliableProducts:
        this.state.avaliableProducts - this.state.shoppingCartItems,
    })
  }

  render() {
    const { shoppingCartItems, avaliableProducts } = this.state
    const { handleBuy, handleAddition, handleSubtraction } = this
    const buyStyle = shoppingCartItems === 0 ? { opacity: 0.3 } : {}
    return (
      <div>
        <h1>Dostępne produkty: {avaliableProducts}</h1>
        <button
          disabled={shoppingCartItems ? false : true}
          onClick={handleSubtraction}
        >
          -
        </button>
        <span style={buyStyle}>{shoppingCartItems}</span>
        <button
          disabled={shoppingCartItems === avaliableProducts ? true : false}
          onClick={handleAddition}
        >
          +
        </button>
        {shoppingCartItems > 0 && <button onClick={handleBuy}>Kup</button>}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
