import {
    REMOVE_SUBJECT_FROM_FAVORITES, REMOVE_SCRIPT_FROM_FAVORITES,
    GET_SUBJECT_BY_ID, GET_ALL_SUBJECTS, ADD_SCRIPT_TO_FAVORITES, ADD_SUBJECT_TO_FAVORITES,
    GET_SUBJECT_SCRIPTS, FILTERED_SUBJECTS, FILTERED_SUBJECTS2, GET_SCRIPT_BY_ID,
    FILTERED_FAVORITE_SCRIPTS, CLEAR_SCRIPTS, POST_COMMENT, DATA_LOADING, DELETE_COMMENT, GET_ERRORS,
    FAVORITES_LOADING,GET_URL_ERROR,POST_SCRIPT
} from '../Actions/types';


const initialState = {
    currentSubject:[],
    currentScript:[],
    allSubjects:[],
    allScripts:[],
    filteredSubjects:[],
    filteredScripts:[],
    filteredFavoriteScripts:[],
    comments:[],
    loading:false,
    errors:[],
    urlError:[],
    favoritesLoading:false,
    postedScript:[]
};



export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return{
                ...state,
                errors: action.payload
            };
        case GET_URL_ERROR:
            return{
                ...state,
                urlError: action.payload
            };
        case GET_SUBJECT_BY_ID:
            return{
                ...state,
                currentSubject: action.payload
            };
        case GET_ALL_SUBJECTS:
            return{
                ...state,
                allSubjects: action.payload
            };
        case GET_SUBJECT_SCRIPTS:
            return{
                ...state,
                allScripts: action.payload
            };
        case FILTERED_SUBJECTS:
            return{
                ...state,
                filteredSubjects: action.payload,
                loading:false
            };
        case FILTERED_SUBJECTS2:
            return{
                ...state,
                filteredScripts: action.payload,
                loading:false
            };
        case FILTERED_FAVORITE_SCRIPTS:
            return{
                ...state,
                filteredFavoriteScripts: action.payload
            };
        case GET_SCRIPT_BY_ID:
            return{
                ...state,
                currentScript: action.payload,
                comments:action.payload.comments
            };
        case CLEAR_SCRIPTS:
            return{
                ...state,
                filteredScripts: []
            };
        case ADD_SUBJECT_TO_FAVORITES:
            return{
                ...state,
                filteredSubjects: state.filteredSubjects,
                favoritesLoading:false
            };
        case ADD_SCRIPT_TO_FAVORITES:
            return{
                ...state,
                filteredFavoriteScripts: state.filteredFavoriteScripts,
                favoritesLoading:false
            };
        case REMOVE_SUBJECT_FROM_FAVORITES:
            return{
                ...state,
                filteredSubjects: state.filteredSubjects.filter(item => item._id !== action.payload),
                favoritesLoading:false
            };
        case REMOVE_SCRIPT_FROM_FAVORITES:
            return{
                ...state,
                filteredFavoriteScripts: state.filteredFavoriteScripts.filter(item => item._id !== action.payload),
                favoritesLoading:false
            };
        case DATA_LOADING:
            return{
                ...state,
                loading: true
            };
        case POST_COMMENT:
            let allComments = action.payload.comments;
            let val = allComments[0];
            return{
                ...state,
                comments: [...state.comments, val]
            };
        case DELETE_COMMENT:
            return{
                ...state,
                comments: state.comments.filter(item => item._id !== action.payload)
            };
        case FAVORITES_LOADING:
            return{
                ...state,
                favoritesLoading: true
            };
        case POST_SCRIPT:
            return{
                ...state,
                filteredScripts:[...state.filteredScripts, action.payload]
            };
        default:
            return state;
    }
}

