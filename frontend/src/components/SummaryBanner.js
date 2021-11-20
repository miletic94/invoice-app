import React from 'react'

export default function SummaryBanner(props) {
    const handleInfoStatus = (infoStatus) => {
        switch(infoStatus) {
            case "paid":
                return "success"
            case "pending":
                return "warning"
            case "draft":
                return "dark"
            default:
                return "dark"
        }
    }
    const handleDateString = (dateString) => {
        const options = {day:"numeric", month:"short", year:"numeric"}
        const date = new Date(dateString)
        return date.toLocaleDateString("en-GB", options)
    }
    return (
    
        <div className="summaryBannerWrapper">
            <div className="summaryBanner">
                <h4 className="id">
                    <span className="hashTag">#</span>
                    <span className="hash">{props.id}</span>
                </h4>
                <div className="dueDate  fontBg">
                    <span>Due: </span>
                    <span>{handleDateString(props.paymentDue)}</span>
                </div>
                <div className="clientName fontBg">
                    {props.clientName}
                </div>
                <h3 className="totalCost">
                    <span className="currency">£</span> 
                    <span className="amount">{props.total.toLocaleString()}</span>
                </h3>
                <div className={`infoBadge ${handleInfoStatus(props.status)} fontBg`}>
                    <span className={`infoBadgeSymbol ${handleInfoStatus(props.status)} mr-08`}></span>
                    <span className="status">{props.status}</span>
                </div>
                <svg className="arrowRightSummaryBanner" width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </div>
        </div>
    )
}
