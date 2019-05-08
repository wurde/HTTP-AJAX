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
      <div class="row">
        <div class="col-12 py-4">

          <h1>Friends List</h1>

          {props.friends.map((friend, i) => <p key={i}>{friend.name}, {friend.age}, {friend.email}</p>)}

        </div>
      </div>
    </styles.FriendListStyle>
  )
}

/**
 * Export component
 */

module.exports = FriendList
