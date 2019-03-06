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
    
      addFriend = (e) => {
        console.log("friend added!");
        e.preventDefault();
        const friend = {
          name: "megan"
        }
        console.log(friend);
        
        // this.setState({
    
        // })
      }
    
    render() {
        return (
            <div>
                <div>{this.state.friends.map((friend) => ( <Friend key={friend.id} friend={friend} /> ))}</div>
            {/* <NewFriend friends={this.state.friends} addFriend={this.addFriend} /> */}
            </div>
        )
    }
}

export default Friends; 