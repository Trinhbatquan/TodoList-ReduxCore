import {FILTER_SEARCH_CHANGE} from './constant'
import { FILTER_BY_STATUS, FILTER_BY_PRIORITY } from './constant'


export const initState ={
    search: '',
    filters: 'All',
    priority: []
}

export default function reducer (state = initState, action) 
{
    switch (action.type) {
        case FILTER_SEARCH_CHANGE:
            return {
                ...state,
                search: action.payload
            }
        case FILTER_BY_STATUS:
        return {
            ...state,
            filters: action.payload
        }
        case FILTER_BY_PRIORITY:
        return {
            ...state,
            priority: action.payload
        }
        default:
            console.log(2)
            return state;
    }

}