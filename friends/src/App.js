'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('./components/index')

/**
 * Constants
 */

const FriendList = components.FriendList

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */

function App() {
  return (
    <div className="jsx-App">
      <FriendList />
    </div>
  )
}

/**
 * Export component
 */

module.exports = App
