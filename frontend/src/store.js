import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { customerReducer, OneCustomerReducer } from "./reducers/customerReducer";
import { clientReducer, clientsReducer } from "./reducers/clientReducer";
import { orderdetailsReducer } from "./reducers/orderReducer";
const reducer = combineReducers({
    customers: customerReducer,
    client: clientReducer,
    clients: clientsReducer,
    customer: OneCustomerReducer,
    orderdetail: orderdetailsReducer
})

let initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store; 