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
const axios_client = axios.create({ baseURL: 'http://localhost:5000' })

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
    this.removeFriend = this.removeFriend.bind(this)
  }

  componentDidMount() {
    axios_client({
      method: 'GET',
      url: '/friends'
    }).then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  addNewFriend(friend) {
    axios_client({
      method: 'POST',
      url: '/friends',
      data: friend
    }).then(res => { this.setState({ friends: res.data }) })
      .catch(err => console.log(err))
  }

  updateFriend(friend) {
    axios_client({
      method: 'PUT',
      url: `/friends/${friend.id}`,
      data: friend
    }).then(res => { this.setState({ friends: res.data }) })
      .catch(err => console.log(err))
  }

  removeFriend(id) {
    axios_client({
      method: 'DELETE',
      url: `/friends/${id}`
    }).then(res => { this.setState({ friends: res.data }) })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="container">
            <NewFriendForm addNewFriend={this.addNewFriend} />
            <FriendList friends={this.state.friends}
                        updateFriend={this.updateFriend}
                        removeFriend={this.removeFriend}/>
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
