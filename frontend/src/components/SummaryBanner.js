import React from 'react'

export default function SummaryBanner() {
    return (
    
        <div style={{ width: "100%", display:"flex", justifyContent: "center", alignItems:"center"}}>
            <div className="summaryBanner">
                <h4 className="id">
                    <span className="hashTag">#</span>
                    <span className="hash">RT3080</span>
                </h4>
                <div className="dueDate  fontBg">
                    Due  19 Aug 2021
                </div>
                <div className="clientName fontBg">
                    Jensen Huang
                </div>
                <h3 className="totalCost">
                    £ 1,800.90
                </h3>
                <div className="infoBadge darkInfoBadge fontBg">
                    <span className="circleXsm darkCircle mr-08"></span>
                    <span>paid</span>
                </div>
                <svg className="arrowRightSummaryBanner" width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </div>
        </div>
    )
}
