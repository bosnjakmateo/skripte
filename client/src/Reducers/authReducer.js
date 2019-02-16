import {GET_USER, PROFILE_LOADING, SET_CURRENT_USER,REGISTER_SUCCESS,THEME_CHANGED} from '../Actions/types';
import isEmpty from '../Validation/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {},
    userData: {},
    loading: false,
    userFetched:false,
    registrationSuccess: false,
    theme:""
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case GET_USER:
            return{
                ...state,
                userData: action.payload,
                loading: false,
                userFetched:true,
                theme:action.payload.theme
             };
        case PROFILE_LOADING:
            return{
                ...state,
                loading: true
            };
        case REGISTER_SUCCESS:
            return{
                ...state,
                registrationSuccess: true
            };
        case THEME_CHANGED:
            return{
                ...state,
                theme: action.payload
            };
            default:
                return state;
    }
}
