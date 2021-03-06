import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers"


function saveToLocalStorage(state){
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState);
    }catch{

    }
}


const initialState = {};

const middleware = [thunk];


const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
);

store.subscribe(() => saveToLocalStorage(store.getState()));


export default store;