import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar=(props)=>{
    return(
        // <div>
        //     <NavLink exact activeClassName="active" to="/">Exercise List</NavLink>
        //     &nbsp;&nbsp;
        //     <NavLink activeClassName="active" to="/creatExercise">Create Exercise</NavLink>
        //     &nbsp;&nbsp;
        //     <NavLink activeClassName="active" to="/editExercise">Edit Exercise</NavLink>
        //     &nbsp;&nbsp;
        //     <NavLink activeClassName="active" to="/createUser">Create User</NavLink>
        //     &nbsp;&nbsp;
        // </div>
        
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <NavLink exact activeClassName="active" to='/'>Exercise List</NavLink>
                    </li>
                    &nbsp;&nbsp;
                    <li className="navbar-item">
                    <NavLink activeClassName="active" to='/createexercise'>Create Exercise</NavLink>
                    </li>
                    &nbsp;&nbsp;
                    <li className="navbar-item">
                    <NavLink activeClassName="active" to='/createuser'>Create User</NavLink>
                    </li>
                    &nbsp;&nbsp;
                    <li className="navbar-item">
                    <NavLink activeClassName="active" to='/editexercise'>Edit Exercise</NavLink>
                    </li>
                    &nbsp;&nbsp;
                </ul>
            </div>
        </nav>   
        

    )
}