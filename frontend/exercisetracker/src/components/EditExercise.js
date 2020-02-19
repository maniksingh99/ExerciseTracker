import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux';
const EditExercise=(props)=>{
    return(
        <div>
            <h3>Edit Exercise Log</h3>
            <div className="form-group">
                <label>Username:</label>
                <select id='username' onChange={props.editInput}  className='form-control' defaultValue={props.editItem.username}>
                    {
                        props.arrUser.map((ele,index)=>(
                            <option key={index} value={ele.username}>{ele.username}</option>
                        ))
                    }
                </select>
            </div>
            <div className="form-group">
                <label>Description:</label>
                <input id='description' onChange={props.editInput} type="text" className="form-control" defaultValue={props.editItem.description}></input>
            </div>
            <div className="form-group">
                <label>Duration(in minutes):</label>
                <input id='duration' onChange={props.editInput} type="text" className="form-control" defaultValue={props.editItem.duration}></input>
            </div>
            <div className='form-group'>
                <label>Date:</label>
                <div className="form-group">
                  <DatePicker onChange={props.takeDate}  selected={props.editItem.date}/>
                </div>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={()=>{props.update()}}>UPDATE</button>
            </div>
        </div>
    )

}

const mapStateToProps=(state)=>{
    console.log('Central State Object',state.arrUser);
    return{
        arrUser:state.arrUser
    }
}

const fn=connect(mapStateToProps)
export default fn(EditExercise)