import React from 'react'
import Form from './Form'

export default function AddFormWrapper(props) {
    const closeModal = props.closeModal
    return (
            <div className="formWrapper addFormWrapper">
                <header>
                    <h1>New Invoice</h1>
                </header>
                <Form />
                <footer>
                    <div className="controls">
                        <button className="btnTernary" onClick={closeModal}>
                            Discard
                        </button>

                        <div className="btnGroup">
                            <button className="btnSecondary">
                                Save to Draft
                            </button>
                            <button className="btnPrimary">
                                Save and Send
                            </button>
                        </div>
                    </div>
                </footer>
    
            </div>
    )
}
