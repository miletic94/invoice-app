import * as actions from "../consts/ivoiceDetailsConsts"

export default function invoiceDetailsReducer(state = {
    loading:false,
    details: {},
    error: null
}, action) {
    switch(action.type) {
        case actions.INVOICE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actions.INVOICE_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                details: action.payload.data
            }
        case actions.INVOICE_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default: 
            return state
    }
}