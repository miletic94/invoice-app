import React from 'react'
import "./infoBadge.css"

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
export default function InfoBadge(props) {
    return (
        <div className={`infoBadge ${handleInfoStatus(props.status)} fontBg`}>
                    <span className={`infoBadgeSymbol ${handleInfoStatus(props.status)} mr-08`}></span>
                    <span className="status">{props.status}</span>
        </div>
        )
    }
    
    