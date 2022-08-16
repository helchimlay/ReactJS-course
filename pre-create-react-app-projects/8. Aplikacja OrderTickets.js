const ValidationMessage = (props) => {
  const { message } = props
  return <p>{message}</p>
}

const FormComponent = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        id="age"
        type="checkbox"
        onChange={props.handleCheckboxChange}
        checked={props.isChecked}
      />
      <label htmlFor="age">Mam ukończone 16 lat.</label>
      <br />
      <button type="submit">Kup bilet</button>
    </form>
  )
}

const displayMessage = (isChecked, isFormSubmited) => {
  if (isFormSubmited) {
    if (isChecked) {
      return <ValidationMessage message="Możesz obejrzeć film." />
    } else {
      return <ValidationMessage message="Nie możesz obejrzeć filmu!" />
    }
  } else {
    return null
  }
}

/////////////////////////////////////////////////////////////////

class TicketShop extends React.Component {
  state = {
    isChecked: false,
    isFormSubmited: false,
  }

  handleCheckboxChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
      isFormSubmited: false,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.isFormSubmited) {
      this.setState({
        isFormSubmited: true,
      })
    }
  }

  render() {
    const { isChecked, isFormSubmited } = this.state
    const { handleSubmit, handleCheckboxChange } = this

    return (
      <>
        <h1>Kub bilet na horror.</h1>
        <FormComponent
          handleSubmit={handleSubmit}
          handleCheckboxChange={handleCheckboxChange}
          isChecked={isChecked}
        />
        {displayMessage(isChecked, isFormSubmited)}
      </>
    )
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"))
