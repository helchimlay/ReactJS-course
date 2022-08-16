const Header = (props) => {
  const activeItems = props.items.filter((item) => item.active)
  const numberOfItems = activeItems.length

  const priceOfItems = () => {
    if (numberOfItems === 0) return "Nic nie zamówiono"
    else return `${numberOfItems * 10} zł`
  }

  return (
    <header>
      <h2>Zamówione dania lub napoje: {numberOfItems}</h2>
      <h2>Do zapłaty: {priceOfItems()}</h2>
    </header>
  )
}
