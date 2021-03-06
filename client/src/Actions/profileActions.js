import {
    GET_SUBJECT_BY_ID,
    GET_ALL_SUBJECTS,
    GET_SUBJECT_SCRIPTS,
    FILTERED_SUBJECTS,
    FILTERED_SCRIPTS_FOR_SUBJECT,
    GET_SCRIPT_BY_ID,
    FILTERED_FAVORITE_SCRIPTS,
    CLEAR_SCRIPTS,
    POST_COMMENT,
    ADD_SUBJECT_TO_FAVORITES,
    ADD_SCRIPT_TO_FAVORITES,
    POST_SCRIPT,
    REMOVE_SCRIPT_FROM_FAVORITES,
    REMOVE_SUBJECT_FROM_FAVORITES,
    DELETE_COMMENT,
    TUTORIAL_COMPLETED,
    GET_ERRORS,FAVORITES_LOADING,
    GET_URL_ERROR,
    DATA_LOADING,
    DELETE_SCRIPT
} from "./types";
import axios from 'axios';


export const getAllSubjects = () => dispatch => {
    axios
        .get("/subjects")
        .then(res =>
            dispatch({
                type: GET_ALL_SUBJECTS,
                payload: res.data
            })
        )
};



export const getAllScripts = () => dispatch => {
    dispatch(dataLoading());
    axios
        .get(`/scripts`)
        .then(res => {
            //Save to localStorage
            const allScripts = res.data;
            //Set token to local storage
            localStorage.setItem("allScripts", JSON.stringify(allScripts));
            dispatch({
                type: GET_SUBJECT_SCRIPTS,
                payload: res.data
            })
        });
}

export const getSubjectById = (id) => dispatch => {
    axios
        .get(`/subjects/${id}`)
        .then(res =>
            dispatch({
                type: GET_SUBJECT_BY_ID,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_URL_ERROR,
                payload: err.response
            })
        );
};

export const getScriptById = (id) => dispatch => {
    axios
        .get(`/scripts/${id}`)
        .then(res =>
            dispatch({
                type: GET_SCRIPT_BY_ID,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_URL_ERROR,
                payload: err.response
            })
        );
};


export const filterSubject = (data) => {
    return{
        type:FILTERED_SUBJECTS,
        payload:data
    }
};


export const filterScriptsForSubject = (data) => {
    return{
        type:FILTERED_SCRIPTS_FOR_SUBJECT,
        payload:data
    }
};

export const filterScripts = (data) => {
    return{
        type:FILTERED_FAVORITE_SCRIPTS,
        payload:data
    }
};


export const clearScripts = () => {
    return{
        type:CLEAR_SCRIPTS
    }
};

export const postComment = (id,text) => dispatch => {
    axios
        .post(`/scripts/comments/${id}`,{text})
        .then(res =>
            dispatch({
                type: POST_COMMENT,
                payload:res.data
            })
        )
};

export const addScriptToFavorites = (id) => dispatch => {
    dispatch(setFavoritesLoading());
    axios
        .post(`/scripts/favorites/${id}`)
        .then(res =>
            dispatch({
                type: ADD_SCRIPT_TO_FAVORITES
            })
        )
};

export const addSubjectToFavorites = (id) => dispatch => {
    dispatch(setFavoritesLoading());
        axios
            .post(`/subjects/favorites/${id}`)
            .then(res =>
                dispatch({
                    type: ADD_SUBJECT_TO_FAVORITES
                })
            )
};



export const postScript = (postData) => dispatch => {

    axios
        .post("/scripts", postData)
        .then(res =>
            dispatch({
                type: POST_SCRIPT,
                payload:res.data
            }),
        )
        .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
    );


};


export const removeSubjectFromFavorites = (id) => dispatch => {
    dispatch(setFavoritesLoading())
    axios
        .delete(`/subjects/favorites/${id}`)
        .then(res =>
            dispatch({
                type: REMOVE_SUBJECT_FROM_FAVORITES,
                payload: id
            })
        )
};


export const removeScriptFromFavorites = (id) => dispatch => {
    dispatch(setFavoritesLoading())
    axios
        .delete(`/scripts/favorites/${id}`)
        .then(res =>
            dispatch({
                type: REMOVE_SCRIPT_FROM_FAVORITES,
                payload: id
            })
        )
};

export const deleteComment = (scriptId,commentId) => dispatch => {
    axios
        .delete(`/scripts/comments/${scriptId}/${commentId}`)
        .then(res =>
            dispatch({
                type: DELETE_COMMENT,
                payload: commentId
            })
        )
};

export const deleteScript = (scriptId) => dispatch => {
    axios
        .delete(`/scripts/${scriptId}`)
        .then(res =>
            dispatch({
                type: DELETE_SCRIPT,
                payload:scriptId
            })
        )
};


export const completeTutorial = () => {
        axios
        .patch('/users/tutorial');
    return {
        type:TUTORIAL_COMPLETED
    }
};


export const setFavoritesLoading = () => {
    return{
        type: FAVORITES_LOADING
    }
};

export const dataLoading = () => {
    return{
        type: DATA_LOADING
    }
};