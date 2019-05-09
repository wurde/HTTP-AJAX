'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')
const Friend = require('./Friend')

/**
 * Define component
 */

function FriendList(props) {
  return (
    <styles.FriendListStyle>
      <div className="row">
        <div className="col-12 py-2">
          <h1>Friends List</h1>

          {props.friends.map((friend, i) =>
            <Friend key={i} {...friend} removeFriend={props.removeFriend} updateFriend={props.updateFriend} />)}
        </div>
      </div>
    </styles.FriendListStyle>
  )
}

/**
 * Export component
 */

module.exports = FriendList
