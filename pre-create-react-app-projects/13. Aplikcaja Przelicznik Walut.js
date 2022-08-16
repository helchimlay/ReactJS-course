const Currency = (props) => {
  const value = ((props.amount / props.ratio) * props.price).toFixed(2)
  return (
    <div>
      {props.title}: {value}
    </div>
  )
}

class CurrencyCalculator extends React.Component {
  state = {
    amount: "",
    product: "electricity",
  }

  static defaultProps = {
    currencies: [
      { id: 1, name: "zloty", ratio: 1, title: "Wartość w złotówkach: " },
      { id: 2, name: "euro", ratio: 4.7, title: "Wartość w euro: " },
      { id: 3, name: "ruple", ratio: 0.076, title: "Wartość w ruplach: " },
      { id: 3, name: "dollar", ratio: 3.5, title: "Wartość w dolarach: " },
    ],
    prices: {
      electricity: 0.57,
      oranges: 11.2,
      gas: 6.8,
    },
  }

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    })
  }

  handleSelect = (e) => {
    this.setState({
      product: e.target.value,
      amount: "",
    })
  }

  inputSuffix = (select) => {
    switch (select) {
      case "electricity":
        return <em> kWh</em>
      case "gas":
        return <em> litrów</em>
      case "oranges":
        return <em> kilogramów</em>
      default:
        break
    }
  }

  selectPrice = (product) => {
    return this.props.prices[product]
  }
  render() {
    const { amount, product } = this.state

    const calculations = this.props.currencies.map((currency) => (
      <Currency
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        amount={amount}
        price={this.selectPrice(product)}
      />
    ))
    return (
      <>
        <label>
          Wybierz produkt:
          <select value={product} onChange={this.handleSelect}>
            <option value="electricity">prąd</option>
            <option value="gas">benzyna</option>
            <option value="oranges">pomarańcze</option>
          </select>
        </label>
        <br />
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
          {this.inputSuffix(this.state.product)}
        </label>
        {calculations}
      </>
    )
  }
}

ReactDOM.render(<CurrencyCalculator />, document.getElementById("root"))
