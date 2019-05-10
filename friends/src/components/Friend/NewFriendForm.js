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
        <div className="row">
          <div className="col-12 py-4">

            <form onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <label htmlFor="input-name">Name</label>
                <input id="input-name" type="text" name="name" value={this.state.name} onChange={this.handleOnChange} className="form-control" required></input>
              </div>
              <div className="form-group">
                <label htmlFor="input-email">Email</label>
                <input id="input-email" type="text" name="email" value={this.state.email} onChange={this.handleOnChange} className="form-control" required></input>
              </div>
              <div className="form-group">
                <label htmlFor="input-age">Age</label>
                <input id="input-age" type="number" name="age" value={this.state.age} onChange={this.handleOnChange} className="form-control"></input>
              </div>
              <div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>

          </div>
        </div>
      </styles.NewFriendFormStyle>
    )
  }
}

/**
 * Export component
 */

module.exports = NewFriendForm
