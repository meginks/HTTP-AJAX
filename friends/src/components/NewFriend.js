import React from 'react'; 


const NewFriend = (props) => {
    return (
        <form onSubmit={props.addFriend}>
            <input type="text" value={props.name} name="name" onChange={props.handleChanges} placeholder="name" /> 
            <input type="text" value={props.age} name="age" onChange={props.handleChanges} placeholder="age" />
            <input type="text" value={props.email} name="email" onChange={props.handleChanges} placeholder="email" />
            <input type="text" value={props.id} name="id" onChange={props.handleChanges} placeholder="id" /> 
            <button type="submit">Add friend!</button>
        </form>
    )
}

export default NewFriend;