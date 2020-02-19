import React from 'react';
import {connect} from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import moment from 'moment';
const ExerciseList=(props)=>{
    console.log("Props.....",props.arr);
    return(
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>S.No</th>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Functions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.arr.map((ele,index)=>{
                             return(<tr key={index}>
                                 <td>{index+1}</td>
                                 <td>{ele.username}</td>
                                 <td>{ele.description}</td>
                                 <td>{ele.duration}</td>
                                 <td>{moment(ele.date).format("MM/DD/YYYY")}</td>
                                 <td><span onClick={()=>{props.delete(ele)}}><i className="fas fa-trash"></i></span> 
                                 <span onClick={()=>{props.edit(ele)}}><i className="fas fa-edit"></i></span></td>
                                 {/* <td>{ele.date}</td> */} 
                             </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps=(state)=>{
    console.log("Central State array is",state.arr);
    return{
        arr:state.arr
    }
}

const fn=connect(mapStateToProps);
export default fn(ExerciseList);