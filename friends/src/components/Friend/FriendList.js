'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Constants
 */

const Component = React.Component

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
