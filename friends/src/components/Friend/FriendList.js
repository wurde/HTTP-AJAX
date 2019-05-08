'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Define component
 */

function FriendList(props) {
  return (
    <div className="jsx-FriendList">
      <h1>Friends List</h1>

      {props.friends.map((friend, i) => <p key={i}>{friend.name}, {friend.age}, {friend.email}</p>)}
    </div>
  )
}

/**
 * Export component
 */

module.exports = FriendList
