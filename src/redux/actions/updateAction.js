import {DISPLAY_LIST, ACTIVITY_LIST} from './types';

export const displayList = data => {
    console.log(data)
    return{
        type: DISPLAY_LIST,
        payload: data
    }
}

export const activityList = list => {
    console.log(list)
    return{
        type: ACTIVITY_LIST,
        payload: list
    }
}

