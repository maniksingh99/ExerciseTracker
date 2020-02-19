import {createStore} from 'redux';
import {addReducer} from './reducers/addreducer'

export const store=createStore(addReducer);
store.subscribe(()=>{
    console.log('Subscribe......',store.getState());
})