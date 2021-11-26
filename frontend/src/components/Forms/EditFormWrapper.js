import React from 'react'

export default function EditFormWrapper(props) {
    const closeModal = props.closeModal
    return (
            <div className="formWrapper editFormWrapper">
                <header>
                    <h1>Edit</h1>
                </header>

                <footer>
                    <div className="controls">
                        <div></div>
                        
                        <div className="btnGroup">
                            <button className="btnTernary" onClick={closeModal}>
                                Cancel
                            </button>
                            <button className="btnPrimary">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </footer>
    
            </div>
    )
}
