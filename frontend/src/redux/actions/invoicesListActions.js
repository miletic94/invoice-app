import * as actions from "../consts/invoicesListConsts"
import Axios from "axios"

export const getInvoicesList = () => async dispatch => {
    dispatch({
        type: actions.INVOICES_LIST_REQUEST
    })
    try {
        const {data} = await Axios.get("/api/invoices")
        dispatch({
            type: actions.INVOICES_LIST_SUCCESS,
            payload: {data}
        })
    } catch (error) {
        dispatch({
            type: actions.INVOICES_LIST_FAIL,
            payload: {error: error.message}
        })
    }
}