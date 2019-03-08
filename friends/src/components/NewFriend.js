import React from 'react'; 
import axios from 'axios';


class NewFriend extends React.Component { 
    constructor(props) {
        super(props);
       this.state = {
           name: '',
           age: '',
           email: '', 
       } 
    }
       handleChange = e => {
        e.preventDefault();
        this.setState({ 
            [e.target.name]: e.target.value, 
    
         });
      }
    
      handleSubmit = e => {
        e.preventDefault();
          axios.post(`http://localhost:5000/friends/`, {  name: this.state.name, 
          age: this.state.age,
          email: this.state.email })
            .then(res => {
              console.log(res);
              console.log(res.data);
              this.setState({ friends: res.friends })
            })
            .catch(err => console.log(err))
        };


    render() {
    return (
        <form onSubmit={this.handleSubmit} >
            <input type="text" value={this.state.name} name="name" onChange={this.handleChange} placeholder="name" /> 
            <input type="text" value={this.state.age} name="age" onChange={this.handleChange} placeholder="age" />
            <input type="text" value={this.state.email} name="email" onChange={this.handleChange} placeholder="email" />
            <button type="submit">Add friend!</button>
        </form>
    )
    }
}

export default NewFriend; 
