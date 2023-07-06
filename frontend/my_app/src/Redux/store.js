import { reducer } from "./reducer";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"

const rootReducer=reducer

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))