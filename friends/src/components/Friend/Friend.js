'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Constants
 */

const Component = React.Component

/**
 * Define component
 */

class Friend extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      name: this.props.name,
      email: this.props.email,
      age: this.props.age,
    }
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <styles.FriendStyle>
        <p>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} className="form-control"></input>
          <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange} className="form-control"></input>
          <input type="number" name="age" value={this.state.age} onChange={this.handleOnChange} className="form-control mr-2"></input>
          <span className="btn btn-primary" onClick={() => this.props.updateFriend(this.state)}>save</span>
          <span className="btn" onClick={() => this.props.removeFriend(this.props.id)}>x</span>
        </p>
      </styles.FriendStyle>
    )
  }
}

/**
 * Export component
 */

module.exports = Friend
