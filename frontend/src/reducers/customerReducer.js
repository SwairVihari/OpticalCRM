import {
    ALL_CUSTOMER_FAIL,
    ALL_CUSTOMER_REQUEST,
    ALL_CUSTOMER_SUCCESS,
    CLEAR_ERRORS,
    ADD_CUSTOMER_FAIL,
    ADD_CUSTOMER_REQUEST,
    ADD_CUSTOMER_SUCCESS,
    CUSTOMER_FAIL,
    CUSTOMER_REQUEST,
    CUSTOMER_SUCCESS
} from "../constants/customerConstant"
export const OneCustomerReducer = (state = { customer: {} }, action) => {
    switch (action.type) {
        case CUSTOMER_REQUEST:
            return {
                loadingCustomer: true,
                // isAuthenticated: false
            }

        case CUSTOMER_SUCCESS:
            return {
                ...state,
                loadingCustomer: false,
                // isAuthenticated: true,
                customer: action.payload
            }

        case CUSTOMER_FAIL:

            return {
                ...state,
                loadingCustomer: false,
                // client: null,
                // isAuthenticated: false,
                error: action.payload
            }
        // break;

        default:
            return state;
        // break;
    }
}
export const customerReducer = (state = { customers: [], }, action) => {
    switch (action.type) {
        case ALL_CUSTOMER_REQUEST:
            return {
                ...state,
                loading: true,
                customer: []
            };
        case ALL_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
                customers: action.payload.coustomers,
                customersCount: action.payload.customerCount,
                resultPerPage: action.payload.resultPerPage,
                filteredProductsCount: action.payload.filteredProductsCount
            };
        case ALL_CUSTOMER_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        case ADD_CUSTOMER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_CUSTOMER_SUCCESS:
            return {
                loading: false,
                success: true,
                customer: action.payload
            }
        case ADD_CUSTOMER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}