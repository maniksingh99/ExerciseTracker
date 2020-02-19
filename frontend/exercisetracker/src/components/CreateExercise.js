import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux';

const CreateExercise=(props)=>{

    console.log("props arrUser....",props.arrUser);
    return(
        <div>
            <h3>Create New Exercise Log</h3>
            <div className="form-group">
                <label>Username:</label>
                <select id='username' onChange={props.takeInput}  className='form-control' >
                {
                        props.arrUser.map((ele,index)=>{
                         return(<option key={index} value={ele.username}>{ele.username}</option>
                        )})
                }
                </select>
            </div>
            <div className="form-group">
                <label>Description:</label>
                <input id='description' onChange={props.takeInput} type="text" className="form-control" placeholder='Enter the Description'></input>
            </div>
            <div className="form-group">
                <label>Duration(in minutes):</label>
                <input id='duration' onChange={props.takeInput} type="text" className="form-control" placeholder='Enter the Duration'></input>
            </div>
            <div className='form-group'>
                <label>Date:</label>
                <div className="form-group">
                  <DatePicker onChange={props.takeDate}  selected={props.date}/>
                </div>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={()=>{props.add()}}>ADD</button>
            </div>
        </div>
    )
}



const mapStateToProps=(state)=>{
    console.log("Central State Object",state);
    return{
        arrUser:state.arrUser
    };
}

const fn=connect(mapStateToProps);
export default fn(CreateExercise);
