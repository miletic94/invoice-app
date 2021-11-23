import Axios from "axios"
import * as actions from "../consts/ivoiceDetailsConsts"

export const getInvoiceDetails = invoiceId => async dispatch => {
        dispatch({
            type: actions.INVOICE_DETAILS_REQUEST
        })
        try {
            const { data } = await Axios.get(`/api/invoices/${invoiceId}`)
            dispatch({
                type: actions.INVOICE_DETAILS_SUCCESS,
                payload: { data }
            })
        } catch (error) {
            dispatch({
                type: actions.INVOICE_DETAILS_FAIL,
                payload: {error: error.message}
            })
        }
}