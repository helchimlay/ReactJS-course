const ListItems = (props) => {
  const items = props.items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      active={item.active}
      handleStatusChange={props.handleStatusChange}
    />
  ))

  return (
    <>
      <h1>Twoje zamówienie</h1>
      <ul>{items}</ul>
    </>
  )
}
