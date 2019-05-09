'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function Friend(props) {
  return (
    <styles.FriendStyle>
      <p>{props.name}, {props.age}, {props.email} <span onClick={() => props.removeFriend(props.id)}>x</span></p>
    </styles.FriendStyle>
  )
}

/**
 * Export component
 */

module.exports = Friend
