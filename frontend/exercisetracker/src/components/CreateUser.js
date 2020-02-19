import React from 'react';

export const CreateUser=(props)=>{
    return(
        <div>
            <h3>Create New User</h3>
            <div className="form-group">
                <label>Username:</label>
                <input id="username" type="text" className="form-control" onChange={props.takeUser}></input>
            </div>
            <div className="form-group">
                <button onClick={props.addUser} className="btn btn-primary">ADD USER</button>
            </div>
        </div>
    )
}