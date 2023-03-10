import {createSelector} from 'reselect'



export const todoList = (state) => {
    return state.TodoReducer;
}

export const filterSearch = (state) => {
    return state.FilterReducer.search;
}

export const filterByStatus = (state) => {
    return state.FilterReducer.filters;
}

export const filterByPriority = (state) => {
    return state.FilterReducer.priority;
}


export const customSelector = createSelector(
    todoList,
    filterSearch,
    filterByStatus,
    filterByPriority,
    (todoS, searchText, status, priority) => {
        localStorage.setItem('todo-redux', JSON.stringify(todoS))
        if (status === 'All') {
            return todoS.filter(todo => {
                return todo.name.toLowerCase().includes(searchText.toLowerCase()) 
                &&
                (((priority.length === 0) || (priority.length === 3)) ? true : (priority.includes(todo.priority) ? true : false)) 
            })
        } 
        return todoS.filter(todo => {
            return todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
                    (status === 'Completed' ? todo.completed : !todo.completed) 
                    &&
                    ((priority.length === 0 || priority.length === 3) ? true : (priority.includes(todo.priority) ? true : false));
            })
    }
)
