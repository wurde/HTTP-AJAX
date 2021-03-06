'use strict'

/**
 * Dependencies
 */

const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define component
 */

const FriendListStyle = styled.div(() => `
  background: #DDD;
  padding: 10px;
`)

/**
 * Export component
 */

module.exports = FriendListStyle
