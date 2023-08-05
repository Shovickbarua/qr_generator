import { ActionTypes } from "../constants/action-types"


export const setContentState = (obj) => {
    return {
        type: ActionTypes.SET_CONTENT_STATE,
        payload: obj
    }
}