'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function FriendList(props) {
  return (
    <styles.FriendListStyle>
      <h1>Friends List</h1>

      {props.friends.map((friend, i) => <p key={i}>{friend.name}, {friend.age}, {friend.email}</p>)}
    </styles.FriendListStyle>
  )
}

/**
 * Export component
 */

module.exports = FriendList
