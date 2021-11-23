import React from 'react'
import "./ErrorMessage.css"

export default function ErrorMessage(props) {
    return (
        <div className="error-message">
            {props.message}
        </div>
    )
}
