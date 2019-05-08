'use strict'

/**
 * Dependencies
 */

const React = require('react')
const axios = require('axios')

/**
 * Constants
 */

const Component = React.Component
const client = axios.create({ baseURL: 'http://localhost:5000' })

/**
 * Define component
 */

class FriendList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    client({
      method: 'GET',
      url: '/friends'
    }).then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="jsx-FriendList">
        <h1>Friends List</h1>
        {this.state.friends.map(friend => <p>{friend.name}, {friend.age}, {friend.email}</p>)}
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = FriendList
