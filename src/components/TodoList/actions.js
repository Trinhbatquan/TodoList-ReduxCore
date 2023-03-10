import {ADD_ONE_TODO, TODO_COMPLETED, DELETE_TODO} from './constant';


function addOneTodo(payload) {
    return {
     type: ADD_ONE_TODO,
     payload
    }
 }

 function todoCompleted(payload) {
    return {
     type: TODO_COMPLETED,
     payload
    }
 }

 function deleteTodo(payload) {
   return {
    type: DELETE_TODO,
    payload
   }
}
 
 export {addOneTodo, todoCompleted, deleteTodo};