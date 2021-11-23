import {createStore, combineReducers, compose, applyMiddleware} from "redux" 
import thunk from "redux-thunk"
import invoiceDetailsReducer from "./reducers/invoiceDetailsReducer"
import invoicesListReducer from "./reducers/invoicesListReducer"



const rootReducer = combineReducers({
    invoices: invoicesListReducer,
    invoiceDetails: invoiceDetailsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, {invoices: {
    loading: false,
    invoicesList: [],
    error: null
}}, composeEnhancer(applyMiddleware(thunk)))

export default store
