import * as actions from "../consts/invoicesListConsts"

export default function invoicesListReducer(state={
    loading: false,
    invoicesList: [],
    errror: null
}, action) {
    switch(action.type) {
        case actions.INVOICES_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.INVOICES_LIST_SUCCESS:
            return {
                ...state,
                loading:false,
                invoicesList: action.payload.data,
                test: "test"
            }
        case actions.INVOICES_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}