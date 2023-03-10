import {ADD_ONE_TODO, TODO_COMPLETED, DELETE_TODO} from './constant';

const todoList = JSON.parse(localStorage.getItem('todo-redux'));

const sortTodoList = (arr) => {
    const highTodo = arr.filter(todo => {
      return todo.priority === 'High';
    });
    const mediumTodo = arr.filter(todo => {
      return todo.priority === 'Medium';
    });
    const lowTodo = arr.filter(todo => {
      return todo.priority === 'Low';
    });
    return [
      ...highTodo,
      ...mediumTodo,
      ...lowTodo
    ]
  }

const initState = todoList || [
]

export default function reducer (state = initState, action) 
{
    switch (action.type) {
        case ADD_ONE_TODO:
            return sortTodoList([
                ...state,
                action.payload
            ])
            case TODO_COMPLETED:
                const todoList = [...state];
                todoList[action.payload].completed = !todoList[action.payload].completed
                console.log(todoList)
                return [
                   ...todoList
                ]
            case DELETE_TODO: 
                const todo = [...state];
                todo.splice(action.payload, 1);
                return [
                    ...todo
                ]
        default:
            console.log(1)
            return state;
    }

}