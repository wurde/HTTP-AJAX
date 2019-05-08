'use strict'

/**
 * Dependencies
 */

const React = require('react')
const axios = require('axios')
const styles = require('./styles/index')

/**
 * Constants
 */

const Component = React.Component
const client = axios.create({ baseURL: 'http://localhost:5000' })

/**
 * Define component
 */

class NewFriendForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: 0,
      email: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()

    this.props.addNewFriend({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    })

    this.setState({ name: '', age: 0, email: '' })
  }

  render() {
    return (
      <styles.NewFriendFormStyle>
        <h3>New Friends Form</h3>

        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="input-name">Name</label>
            <input id="input-name" type="text" name="name" value={this.state.name} onChange={this.handleOnChange} required></input>
          </div>
          <div>
            <label htmlFor="input-email">Email</label>
            <input id="input-email" type="text" name="email" value={this.state.email} onChange={this.handleOnChange} required></input>
          </div>
          <div>
            <label htmlFor="input-age">Age</label>
            <input id="input-age" type="number" name="age" value={this.state.age} onChange={this.handleOnChange}></input>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </styles.NewFriendFormStyle>
    )
  }
}

/**
 * Export component
 */

module.exports = NewFriendForm
