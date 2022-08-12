const Item = (props) => {
  return (
    <li
      className={props.active ? "enabled" : "disabled"}
      onClick={() => props.handleStatusChange(props.id)}
    >
      {props.name}
    </li>
  )
}
