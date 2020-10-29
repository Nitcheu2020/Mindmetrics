import React from "react";

const numberCircle ={
    'border-radius': '50%',
    width: 36,
    height: 36,
    padding: 8,
    background: '#fff',
    color: '#666',
    'text-align': 'center',
};

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <>
      <form  style={numberCircle} onSubmit={this.handleSubmit}>
        <label>
          email
          <input type="email" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          password
          <input type="password" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Log In" />
      </form>
      </>
    );
  }
}
