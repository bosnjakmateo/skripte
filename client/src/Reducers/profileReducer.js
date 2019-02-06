import {GET_SUBJECT,REMOVE_SUBJECT_FROM_FAVORITES,REMOVE_SCRIPT_FROM_FAVORITES, GET_SCRIPTS,
    GET_SUBJECT_BY_ID,GET_ALL_SUBJECTS,POST_SCRIPT,ADD_SCRIPT_TO_FAVORITES,ADD_SUBJECT_TO_FAVORITES,
    GET_UNIVERSITIES,GET_SUBJECT_SCRIPTS,FILTERED_SUBJECTS,FILTERED_SUBJECTS2,GET_SCRIPT_BY_ID,
    FILTERED_FAVORITE_SCRIPTS,CLEAR_SCRIPTS,POST_COMMENT} from '../Actions/types';


const initialState = {
    favoriteSubjects:[],
    favoriteScripts:[],
    currentSubject:[],
    currentScript:[],
    allSubjects:[],
    allScripts:[],
    filteredSubjects:[],
    filteredScripts:[],
    filteredFavoriteScripts:[],
    comments:[],
};



export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SUBJECT:
            return{
                ...state,
                favoriteSubjects: [...state.favoriteSubjects,action.payload]
            }
        case GET_SCRIPTS:
            return{
                ...state,
                favoriteScripts: action.payload
            }
        case GET_SUBJECT_BY_ID:
            return{
                ...state,
                currentSubject: action.payload
            }
        case GET_ALL_SUBJECTS:
            return{
                ...state,
                allSubjects: action.payload
            }
        case GET_SUBJECT_SCRIPTS:
            return{
                ...state,
                allScripts: action.payload
            }
        case FILTERED_SUBJECTS:
            return{
                ...state,
                filteredSubjects: action.payload
            }
        case FILTERED_SUBJECTS2:
            return{
                ...state,
                filteredScripts: action.payload
            }
        case FILTERED_FAVORITE_SCRIPTS:
            return{
                ...state,
                filteredFavoriteScripts: action.payload
            }
        case GET_SCRIPT_BY_ID:
            return{
                ...state,
                currentScript: action.payload
            }
        case CLEAR_SCRIPTS:
            return{
                ...state,
                filteredScripts: []
            }
        case POST_COMMENT:
            return{
                ...state,
                comments: [...state.currentScript.comments,action.payload]
            }
        case ADD_SUBJECT_TO_FAVORITES:
            return{
                ...state,
                filteredSubjects: [...state.filteredSubjects,action.payload]
            }
        case ADD_SCRIPT_TO_FAVORITES:
            return{
                ...state,
                filteredFavoriteScripts: [...state.filteredFavoriteScripts,action.payload]
            }
        case POST_SCRIPT:
            return{
                ...state,
                allScripts: [...state.allScripts,action.payload]
            }
        case REMOVE_SUBJECT_FROM_FAVORITES:
            return{
                ...state,
                filteredSubjects: state.filteredSubjects.filter(item => item._id !== action.payload)
            }
        case REMOVE_SCRIPT_FROM_FAVORITES:
            return{
                ...state,
                filteredFavoriteScripts: [...state.filteredFavoriteScripts,action.payload]
            }
        default:
            return state;
    }
}

