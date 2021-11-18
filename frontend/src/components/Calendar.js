import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div className="calendar">
            <DatePicker 
                selected={selectedDate}
                onChange={(e) => setSelectedDate(e)}
                className={"datepicker-input"} 
                dateFormat="dd MMM yyy"
            />
      </div>        
    )
}
