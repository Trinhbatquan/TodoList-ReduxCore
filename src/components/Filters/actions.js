import {FILTER_SEARCH_CHANGE} from './constant'
import { FILTER_BY_STATUS, FILTER_BY_PRIORITY} from './constant'

const filterSearchChange = (payload) =>{
    return {
        type: FILTER_SEARCH_CHANGE,
        payload
    }
}

const filterByStatus = (payload) =>{
    return {
        type: FILTER_BY_STATUS,
        payload
    }
}

const filterByPriority = (payload) =>{
    return {
        type: FILTER_BY_PRIORITY,
        payload
    }
}

export {filterSearchChange, filterByStatus, filterByPriority}