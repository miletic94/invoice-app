import React from 'react'
import SummaryBanner from './SummaryBanner'
import data from "../data.json"

export default function SummarList() {
    return (
        <div className="summaryList">
            {
            data.length === 0 ?
            <img className="empty" src="./assets/illustration-empty.svg" alt="empty summary"/>:
            data.map(item => {
                return <SummaryBanner 
                            key = {item.id}
                            id={item.id}
                            paymentDue={item.paymentDue}
                            clientName={item.clientName}
                            total ={item.total}
                            status={item.status}
                        />
            })}
        </div>
    )
}
