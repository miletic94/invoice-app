import * as actions from "../consts/invoicesListConsts"

const filterInvoices = (invoices, filters) => {
    let temp = []
    filters.map(filter => temp.push(...invoices.filter(invoice => invoice.status === filter)))
    return temp
}

export default function invoicesListReducer(state={
    loading: false,
    invoicesList: [],
    filteredInvoicesList: [],
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
                filteredInvoicesList: action.payload.data
            }
        case actions.INVOICES_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case actions.FILTER_INVOICES_LIST:
            return {
                ...state,    
                filteredInvoicesList: 
                action.payload.filters.length === 0 ?
                state.invoicesList:
                filterInvoices(state.invoicesList, action.payload.filters)
            }
        default:
            return state
    }
}