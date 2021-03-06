import {
    GET_UNIVERSITIES, GET_UNIVERSITY_BY_ID, GET_ALL_INSTITUTION_FIELDS, FILTERED_FIELDS,
    FILTERED_INSTITUTION_SUBJECTS, INSTITUTIONS_LOADING
} from "./types";
import axios from 'axios';

export const getUniversities = () => dispatch => {
    axios
        .get("/universities")
        .then(res =>
            dispatch({
                type: GET_UNIVERSITIES,
                payload: res.data
            })
        )
};

export const getInstitutionById = (id) => dispatch => {
    axios
        .get(`/universities/${id}`)
        .then(res =>
            dispatch({
                type: GET_UNIVERSITY_BY_ID,
                payload: res.data
            })
        )

};


export const getAllInstitutionFields = () => dispatch => {
    axios
        .get(`/colleges`)
        .then(res =>
            dispatch({
                type: GET_ALL_INSTITUTION_FIELDS,
                payload: res.data
            })
        )

};


export const filterFields = (data)=> dispatch => {
    dispatch(setInstitutionsLoading())
    dispatch({
        type:FILTERED_FIELDS,
        payload:data
    })
};

export const filterInstitutionSubjects = (data)=> dispatch =>{
    dispatch(setInstitutionsLoading())
    dispatch({
        type:FILTERED_INSTITUTION_SUBJECTS,
        payload:data
    })
}


export const setInstitutionsLoading = () => {
    return{
        type: INSTITUTIONS_LOADING
    }
};