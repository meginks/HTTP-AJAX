import React from 'react'; 
import axios from 'axios';


class NewFriend extends React.Component { 
       state = {
           name: '',
           age: '',
           email: '', 
           id: ''
       } 

       handleChange = e => {
        this.setState({ 
            name: e.target.value, 
            age: e.target.value,
            email: e. target.value
         });
      }
    
      handleSubmit = e => {
        e.preventDefault(); 
        const friend = {
            name: this.state.name
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
            <input type="text" value={this.name} name="name" onChange={this.handleChange} placeholder="name" /> 
            <input type="text" value={this.age} name="age" onChange={this.handleChange} placeholder="age" />
            <input type="text" value={this.email} name="email" onChange={this.handleChange} placeholder="email" />
            <input type="text" value={this.id} name="id" onChange={this.handleChange} placeholder="id" /> 
            <button type="submit">Add friend!</button>
        </form>
    )
    }
}

export default NewFriend; 
