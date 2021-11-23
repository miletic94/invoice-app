import React from 'react'
import InfoBadge from './InfoBadge/InfoBadge'
import { useDateString } from '../hooks/useDateString'

export default function SummaryBanner(props) {
    const dateString = useDateString(props.paymentDue)
    return (
    
        <div className="summaryBannerWrapper">
            <div className="summaryBanner">
                <h4 className="id">
                    <span className="hashTag">#</span>
                    <span className="hash">{props.id}</span>
                </h4>
                <div className="dueDate  fontBg">
                    <span>Due: </span>
                    <span>{dateString}</span>
                </div>
                <div className="clientName fontBg">
                    {props.clientName}
                </div>
                <h3 className="totalCost">
                    <span className="currency">£</span> 
                    <span className="amount">{props.total.toLocaleString()}</span>
                </h3>
                <InfoBadge status = {props.status}/>
                <svg className="arrowRightSummaryBanner" width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
            </div>
        </div>
    )
}
