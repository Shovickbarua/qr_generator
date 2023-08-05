import { ActionTypes } from "../constants/action-types";

const initialState = {
    name: '',
    website_info: '',
    qr_code_style: '',
    eye_style: '',
    qr_code_color: '',
    bg_color: '',
    eye_color: '',
    qr_type: '',
    company_info: {},
    personal_info:{},
    personal_picture:'',
    company_logo: ''
}

export const contentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CONTENT_STATE:
            return { ...state, ...payload };
        case ActionTypes.FETCH_ACCOUNTS_DROPDOWN:
            return { ...state, dropdown_accounts: payload };
        case ActionTypes.SET_ACCOUNT_STATE:
            return { ...state, ...payload }
        default:
            return state;
    }
}