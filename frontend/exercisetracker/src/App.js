import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Navbar} from './components/navbar';
import CreateExercise from './components/CreateExercise';
import {CreateUser} from './components/CreateUser';
import EditExercise from './components/EditExercise';
import ExerciseList from './components/ExerciseList';
import {store} from './models/store';
import {addActionCreator} from './models/actioncreators/addactioncreator';
import {addUserActionCreator} from './models/actioncreators/addactioncreator';
import {addUserArrayActionCreator} from './models/actioncreators/addactioncreator';
import {addExerciseArrayActionCreator} from './models/actioncreators/addactioncreator';
import {deleteActionCreator} from './models/actioncreators/addactioncreator';
import {updateActionCreator} from './models/actioncreators/addactioncreator';
import axios from 'axios';
import uuid from 'uuid';

class App extends React.Component{
    constructor(){
        super();
        this.obj={uid:uuid(),date:new Date()};
        this.editItem={};
        this.user={};
        this.state={
            date:new Date(),
            arrayUser:this.arrayUser
        }
        this.arrayUser=[];
        this.arrayExercise=[];
        // this.userEle={username:""};
    }

    editInput(event){
        var key=event.target.id;
        var value=event.target.value;
        this.editItem[key]=value;
    }

    takeInput(event){
        var key=event.target.id;
        var value=event.target.value;
        this.obj[key]=value;
        console.log('Object is ',this.obj);
    }

    takeDate(date){
        var value=date;
        console.log('value of date is',value);
        this.obj.date=value;
        // console.log('Object is ',this.obj);
    }

    takeUser(event){
        var key=event.target.id;
        var value=event.target.value;
        this.user[key]=value;
    }

    add(){
        console.log('Add call',this.obj);
        var action=addActionCreator(this.obj,'push');
        console.log('Add call Action is ',action);
        store.dispatch(action);
        axios.post('http://localhost:9999/exercise',this.obj)
        .then(res=>console.log(res.data));
        this.obj={uid:uuid(),date:new Date()};
    }

    addUser(){
        console.log('Add user call',this.user);
        var action=addUserActionCreator(this.user,'pushUser');
        console.log('Add user action is',action);
        store.dispatch(action);
        axios.post('http://localhost:9999/register',this.user)
        .then(res=>console.log(res.data));
        this.user='';
    }

    delete(obj){
        console.log("Element to be deleted recieved successfully",obj);
        var action= deleteActionCreator(obj,'delete');
        axios.delete('http://localhost:9999/exercise/'+obj.uid)
        .then(res=>console.log(res.data));
        store.dispatch(action);
    }

    edit(obj){
        this.editItem=obj;
        console.log('Item to be edited....',this.editItem);
        this.setState({editItem:this.editItem});
    }

    update(){
        console.log('Update item.....',this.editItem);
        var action=updateActionCreator(this.editItem,'update');
        store.dispatch(action);
        axios.post('http://localhost:9999/exercise/update/'+this.editItem.uid,this.editItem)
        .then(res=>console.log(res.data));
    }

    addUserArray(userEle){
        console.log('Add User Array call ',userEle);
        var action=addUserArrayActionCreator(userEle,'pushSavedEle');
        console.log('Array of users ',userEle);
        store.dispatch(action);
    }

    addExerciseArray(exerciseEle){
        console.log('Add Exercise Element',exerciseEle);
        var action=addExerciseArrayActionCreator(exerciseEle,'pushExerciseEle');
        console.log('Ele of Exercise',exerciseEle);
        store.dispatch(action);
    }

    componentDidMount(){
        axios.get('http://localhost:9999/register/data')
        .then(res=>{
            if(res.data.length>0){
                this.arrayUser=res.data.map(ele=>ele.username)
                console.log('Component did mount is working for users',this.arrayUser);
                let num=res.data.length;
                
                for(let i=0;i<num;i++){
                    let userEle={username:''};
                    userEle.username=this.arrayUser[i];
                    this.addUserArray(userEle);
                }
            }
        })
        .catch(err=>console.log('Error occured while retreving data',err))
        
        axios.get('http://localhost:9999/exercise/data')
        .then(res=>{
            if(res.data.length>0){
                this.arrayExercise=res.data.map(ele=>ele);
                console.log('Component did mount is working for exercises',this.arrayExercise);
                let num=res.data.length;
                for(let i=0;i<num;i++){
                    let exerciseEle={username:'',description:'',duration:'',date:'',uid:''};
                    exerciseEle.username=this.arrayExercise[i].username;
                    exerciseEle.description=this.arrayExercise[i].description;
                    exerciseEle.duration=this.arrayExercise[i].duration;
                    exerciseEle.date=new Date(this.arrayExercise[i].date);
                    exerciseEle.uid=this.arrayExercise[i].uid;
                    this.addExerciseArray(exerciseEle);
                }
                    // this.arrayExercise.map((ele,index)=>{
                    //     for(let i=0;i<num;i++){
                    //         return(exerciseEle.SNo=index,
                    //             exerciseEle.username=ele.username,
                    //             exerciseEle.description=ele.description,
                    //             exerciseEle.duration=ele.duration)
                    //     }

                    // })
                    // this.addExerciseArray(exerciseEle);
                
            }
        })

        
    }

    render(){
        return(
            <div className="container">
                <Navbar/>
                <br/>
                <Switch>
                  <Route exact path="/" render={()=><ExerciseList delete={this.delete.bind(this)} edit={this.edit.bind(this)}/> }/>
                  <Route path="/createexercise" render={()=><CreateExercise takeInput={this.takeInput.bind(this)} date={this.obj.date} takeDate={this.takeDate.bind(this)} add={this.add.bind(this)}/>} />
                  {/* <Route path="/createexercise" component={createExercise}/> */}
                  <Route path="/editexercise" render={()=><EditExercise editItem={this.editItem} editInput={this.editInput.bind(this)} update={this.update.bind(this)}/>}/>
                  <Route path="/createuser" render={()=><CreateUser takeUser={this.takeUser.bind(this)} addUser={this.addUser.bind(this)}/>}/>
                </Switch>  
            </div>
        ) 
    }
}

export default withRouter(App);