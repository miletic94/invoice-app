import React, { useEffect } from 'react'
import SummaryBanner from './SummaryBanner'
import { useDispatch, useSelector} from "react-redux"
import {getInvoicesList} from "../redux/actions/invoicesListActions"
import ReactLoading from "react-loading"
import ErrorMessage from "./ErrorMessage/ErrorMessage.js"
import {Link} from "react-router-dom"

export default function SummarList() {
    const dispatch = useDispatch()
    useEffect(()=> {
      dispatch(getInvoicesList())
    }, [dispatch])
    const {loading, invoicesList, error} = useSelector(state => state.invoices )
    return (
        <div className="summaryList">
            {
            loading ? <ReactLoading 
                type="bars" 
                color="var(--primary-color)"  
                className="reactLoading"
                />:
            error ? <ErrorMessage message={error} />:
            invoicesList.length === 0 ?
            <img className="empty" src="./assets/illustration-empty.svg" alt="empty summary"/>:
            invoicesList.map(item => {
                return (
                    <Link to={{pathname: `invoice/${item.id}`}} key = {item.id}>
                        <SummaryBanner 
                            id={item.id}
                            paymentDue={item.paymentDue}
                            clientName={item.clientName}
                            total ={item.total}
                            status={item.status}
                        />
                    </Link>
                )
            })}
        </div>
    )
}
