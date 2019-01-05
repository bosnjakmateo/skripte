import {GET_ERRORS, SET_CURRENT_USER} from "./types";
import axios from 'axios';
import jwt_decode from "jwt-decode"
import setAuthToken from "../Utils/setAuthToken";


// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/users', userData)
        .then(res => history.push("/login"))
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


// Log User Out
export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};