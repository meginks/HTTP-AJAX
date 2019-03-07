import React from 'react'; 
import axios from 'axios';


class NewFriend extends React.Component { 
       state = {
           name: '',
           age: '',
           email: '', 
       } 

       handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value, 
    
         });
      }
    
      handleSubmit = e => {
        e.preventDefault(); 
        const friend = {
            name: this.state.name, 
            age: this.state.age,
            email: this.state.email
        };
      
          axios.post(`http://localhost:5000/friends/`, { friend })
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
            .catch(err => console.log(err))
        };


    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" onChange={this.handleChange} placeholder="name" /> 
            <input type="text" name="age" onChange={this.handleChange} placeholder="age" />
            <input type="text" name="email" onChange={this.handleChange} placeholder="email" />
            <button type="submit">Add friend!</button>
        </form>
    )
    }
}

export default NewFriend; 
