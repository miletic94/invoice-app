import React from 'react'

export default function FormModal(props) {
    return (
        <div style={{display: !props.isOpen ? "none" : ""}} className="formModal">
            {props.children}
        </div>
    )
}
FormModal.defaultProps = {
    isOpen: false
}
