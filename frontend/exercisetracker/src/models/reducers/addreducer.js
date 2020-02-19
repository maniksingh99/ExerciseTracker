export const addReducer=(initstate={arr:[],arrUser:[]},action)=>{
    if(action.type=='push'){
        // let tempState={arr:[...initstate.arr,action.payload]};
        // console.log('TempState is###',tempState);
        return{...initstate,arr:[...initstate.arr,action.payload]};
    }

    if(action.type=='pushUser'){
        return{...initstate,arrUser:[...initstate.arrUser,action.payload]}
    }

    if(action.type=='pushSavedEle'){
        return{...initstate,arrUser:[...initstate.arrUser,action.payload]}
    }

    if(action.type=='pushExerciseEle'){
        return{...initstate,arr:[...initstate.arr,action.payload]}
    }

    if(action.type=='delete'){
        var fakeArr=initstate.arr;
        fakeArr=fakeArr.filter(ele=>ele!=action.payload);
        return{...initstate,arr:fakeArr}
    }

    if(action.type=='update'){
        var tempArr=initstate.arr;
        tempArr.forEach(ele=>{
            if(ele.uid==action.payload.uid){
                ele.username=action.payload.username;
                ele.description=action.payload.description;
                ele.duration=action.payload.duration;
                ele.date=action.payload.date;
            }
            console.log('Temp Arr  ',tempArr);
        })
        return{...initstate,arr:tempArr}
    }

    return initstate;
}