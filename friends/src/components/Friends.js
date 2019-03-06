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
        const newFriend = {
          name: this.state.name, 
          age: this.state.age,
          email: this.state.email, 
          id: this.state.id
        }
        
        this.setState({
            friends: [this.state.friends, newFriend], 
            name: '',
            age: '',
            email: '', 
            id: ''
        });
      };

      handleChanges = (e) => {
          this.setState({
              [e.target.name]: e.target.value
          });
      };
    
    render() {
        return (
            <div>
                <div>{this.state.friends.map((friend) => ( <Friend key={friend.id} friend={friend} /> ))}</div>
            <NewFriend friends={this.state.friends} addFriend={this.addFriend} handleChanges={this.handleChanges} key={this.state.name} />
            </div>
        )
    }
}

export default Friends; 