import {
    GET_SUBJECT, GET_SCRIPTS, GET_SUBJECT_BY_ID, GET_ALL_SUBJECTS, GET_SUBJECT_SCRIPTS,
    SET_CURRENT_USER,FILTERED_SUBJECTS,FILTERED_SUBJECTS2,GET_SCRIPT_BY_ID,FILTERED_FAVORITE_SCRIPTS,CLEAR_SCRIPTS,POST_COMMENT,GET_UNIVERSITIES,
    ADD_SUBJECT_TO_FAVORITES,ADD_SCRIPT_TO_FAVORITES,POST_SCRIPT,REMOVE_SCRIPT_FROM_FAVORITES,REMOVE_SUBJECT_FROM_FAVORITES,GET_ERRORS
} from "./types";
import axios from 'axios';



export const getFavoriteSubject = (id) => dispatch => {
    axios
        .get(`/subjects/${id}`)
        .then(res =>
            dispatch({
                type: GET_SUBJECT,
                payload: res.data
            })
        )
};

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
    axios
        .get(`/scripts`)
        .then(res =>
            dispatch({
                type: GET_SUBJECT_SCRIPTS,
                payload: res.data
            })
        )
};

export const getSubjectById = (id) => dispatch => {
    axios
        .get(`/subjects/${id}`)
        .then(res =>
            dispatch({
                type: GET_SUBJECT_BY_ID,
                payload: res.data
            })
        )
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
};

export const getFavoriteScripts = (id) => dispatch => {
    axios
        .get(`/subjects/${id}`)
        .then(res =>
            dispatch({
                type: GET_SCRIPTS,
                payload: res.data
            })
        )

};


export const filtered = (data) => {
    return{
        type:FILTERED_SUBJECTS,
        payload:data
    }
};


export const filtered2 = (data) => {
    return{
        type:FILTERED_SUBJECTS2,
        payload:data
    }
};

export const filtered3 = (data) => {
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
                payload: res.data
            })
        )
};

export const addScriptToFavorites = (id) => dispatch => {
    axios
        .post(`/scripts/favorites/${id}`)
        .then(res =>
            dispatch({
                type: ADD_SCRIPT_TO_FAVORITES,
                payload: res.data
            })
        )
};

export const addSubjectToFavorites = (id) => dispatch => {
        axios
            .post(`/subjects/favorites/${id}`)
            .then(res =>
                dispatch({
                    type: ADD_SUBJECT_TO_FAVORITES,
                    payload: res.data,
                })
            )
};

export const postScript = (postData) => dispatch => {
    axios
        .post("/scripts/", postData)
        .then(res =>
            dispatch({
                type: POST_SCRIPT,
                payload: res.data
            })
        )
};


export const removeSubjectFromFavorites = (id) => dispatch => {
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
    axios
        .delete(`/scripts/favorites/${id}`)
        .then(res =>
            dispatch({
                type: REMOVE_SCRIPT_FROM_FAVORITES,
                payload: id
            })
        )

};
