export const addActionCreator=(obj,opr)=>{
    console.log("Inside add action creator");
    return{
        payload:obj,
        type:opr
    }
}

export const addUserActionCreator=(user,opr)=>{
    console.log("Inside user add action creator");
    return{
        payload:user,
        type:opr
    }
}

export const addUserArrayActionCreator=(userEle,opr)=>{
    return{
        payload:userEle,
        type:opr
    }
}

export const addExerciseArrayActionCreator=(exerciseEle,opr)=>{
    return{
        payload:exerciseEle,
        type:opr
    }
}

export const deleteActionCreator=(obj,opr)=>{
    return{
        payload:obj,
        type:opr
    }
}

export const updateActionCreator=(obj,opr)=>{
    return{
        payload:obj,
        type:opr
    }
}