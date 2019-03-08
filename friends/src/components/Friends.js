import React, {Component} from 'react'; 
import axios from 'axios';
// component imports 
import Friend from './Friend'; 
import NewFriend from './NewFriend';

class Friends extends Component {

    constructor() {
        super();
        this.state = {
          friends: []
        }
      }
      
      componentDidMount() {
            axios
            .get('http://localhost:5000/friends/')
            .then((friends) => this.setState({ friends: friends.data }))
            .catch(err => console.log(err));
      }
    
      addFriend = (e, friend) => {
        e.preventDefault(); 
        axios 
        .post('http://localhost:5000/friends/', friend)
        .then((res) => {
          this.setState({
            friends: res.data
          })
        })
        .catch((err) => console.log(err))
      }
    
    render() {
        return (
            <div>
              <h1>Friends!</h1>
                <div>{this.state.friends.map((friend) => ( <Friend key={friend.id} friend={friend} /> ))}</div>
            <NewFriend friends={this.state.friends} addFriend={this.addFriend} key={this.state.name} />
            </div>
        )
    }
}

export default Friends; 