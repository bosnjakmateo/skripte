import {GET_ERRORS, GET_USER, PROFILE_LOADING, SET_CURRENT_USER, REGISTER_SUCCESS, THEME_CHANGED} from "./types";
import axios from 'axios';
import jwt_decode from "jwt-decode"
import setAuthToken from "../Utils/setAuthToken";


// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/users/register', userData)
        .then(res => {history.push("/login");dispatch({type:REGISTER_SUCCESS})})
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};


// Login - Get User Token
export const loginUser = (userData) => dispatch => {
  axios
      .post("/users/login", userData)
      .then(res => {
          //Save to localStorage
          const {token} = res.data;
          //Set token to local storage
          localStorage.setItem("jwtToken", token);
          //Set Token to Auth Header
          setAuthToken(token);
          //Decode token to get user data
          const decoded = jwt_decode(token);
          //Set current user
          dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
          dispatch({
              type: GET_ERRORS,
              payload: err.response.data
          }));
};

// Set Logged in User
export const setCurrentUser = (decoded) => {
  return{
      type: SET_CURRENT_USER,
      payload: decoded
  }
};

export const getCurrentUser = () => dispatch => {
    dispatch(setProfileLoading())
    axios
        .get('/users/current')
        .then(res =>
            dispatch({
                type: GET_USER,
                payload: res.data
            })
        )

};


export const setProfileLoading = () => {
    return{
        type: PROFILE_LOADING
    }
};


// Log User Out
export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};

export const changeTheme = (mode) => dispatch =>  {
    axios
        .patch('/users/theme',  {theme:mode})
        .then(res =>
            dispatch({
                type: THEME_CHANGED,
                payload:mode
            })
        )
};