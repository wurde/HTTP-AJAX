'use strict'

/**
 * Dependencies
 */

const React = require('react')
const axios = require('axios')
const components = require('./components/index')

/**
 * Constants
 */

const Component = React.Component
const FriendList = components.FriendList
const NewFriendForm = components.NewFriendForm
const client = axios.create({ baseURL: 'http://localhost:5000' })

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: []
    }
    this.addNewFriend = this.addNewFriend.bind(this)
  }

  componentDidMount() {
    client({
      method: 'GET',
      url: '/friends'
    }).then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  addNewFriend(friend) {
    const new_friend_list = this.state.friends.concat(friend)
    this.setState({ friends: new_friend_list })
  }

  render() {
    return (
      <div class="row">
        <div class="col-12">
          <div class="container">
            <NewFriendForm addNewFriend={this.addNewFriend} />
            <FriendList friends={this.state.friends}/>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = App
