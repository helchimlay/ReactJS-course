class Form extends React.Component {
  state = { city: "", cityText: "", cityCheckbox: true, cityNumber: 1 }

  handleChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
  }

  render() {
    return (
      <form>
        <label>
          Podaj miasto:
          <br />
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście
          <br />
          <textarea
            name="cityText"
            value={this.state.cityText}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="cityCheckbox"
            checked={this.state.cityCheckbox}
            onChange={this.handleChange}
          />
          Czy kochasz to miasto?
        </label>
        <br />
        <label>
          Ile razy byłeś w tym mieście
          <br />
          <select
            name="cityNumber"
            value={this.state.cityNumber}
            onChange={this.handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">wiecej</option>
          </select>
        </label>
      </form>
    )
  }
}

ReactDOM.render(<Form />, document.getElementById("root"))
