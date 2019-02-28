import {GET_UNIVERSITIES,GET_UNIVERSITY_BY_ID,GET_ALL_INSTITUTION_FIELDS,FILTERED_FIELDS,FILTERED_INSTITUTION_SUBJECTS,INSTITUTIONS_LOADING} from '../Actions/types';



const initialState = {
    universities:[],
    university:[],
    institutionFields:[],
    fieldsFetched:false,
    universityFetched:false,
    filteredFields:[],
    filteredInstitutionSubjects:[],
    loading:false
};



export default function(state = initialState, action) {
    switch(action.type) {
        case GET_UNIVERSITIES:
            return{
                ...state,
                universities: action.payload
            }
        case GET_UNIVERSITY_BY_ID:
            return{
                ...state,
                university: action.payload,
                universityFetched: true
            }
        case GET_ALL_INSTITUTION_FIELDS:
            return{
                ...state,
                institutionFields: action.payload,
                fieldsFetched:true
            }
        case FILTERED_FIELDS:
            return{
                ...state,
                filteredFields: action.payload,
                loading:false,
            }
        case FILTERED_INSTITUTION_SUBJECTS:
            return{
                ...state,
                filteredInstitutionSubjects: action.payload,
                loading:false,
            }
        case INSTITUTIONS_LOADING:
            return{
                ...state,
                loading:true
            }
        default:
            return state;
    }
}