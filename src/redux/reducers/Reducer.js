import { DISPLAY_LIST, ACTIVITY_LIST } from '../actions/types'


const initialState = {

datas:[],
activity:[]
}

export default function (state = initialState, action){
    console.log('action',action.payload)

    switch(action.type){
        case DISPLAY_LIST:
        // const newState = { ...state}
        // console.log('newstate', newState)
        // newState.datas.push(action.payload)
        // return newState;
        // console.log('preeee', state)

        
        return {
            ...state,
            datas:action.payload
            
        }
        case ACTIVITY_LIST:
        return {
            
            activity:action.payload
        }

        default:
        return state;
    }

}