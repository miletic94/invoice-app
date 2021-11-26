import React from 'react'

export default function Form() {
    return (
        <form>
            <fieldset>
                <legend>Bill From</legend>
                <label for="senderAddressStreet">Street Address</label>
                <input id="senderAddressStreet" type="text" />
                <label for="senderAddressCity">City</label>
                <input id="senderAddressCity" type="text" /> 
                <label for="senderAddressPostCode">Post Code</label>
                <input id="senderAddressPostCode" type="text" /> 
                <label for="senderAddressCountry">Country</label>
                <input id="senderAddressCountry" type="text" /> 
            </fieldset>
            <fieldset>
                <legend>Bill To</legend>
                <label for="clientName">Client's Name</label>
                <input id="clientName" type="text" />
                <label for="clientEmail">Client's Email</label>
                <input id="clientEmail" type="text" />
                <label for="clientAddressStreet">Street Address</label>
                <input id="clientAddressStreet" type="text" />
                <label for="clientAddressCity">City</label>
                <input id="clientAddressCity" type="text" /> 
                <label for="clientAddressPostCode">Post Code</label>
                <input id="clientAddressPostCode" type="text" /> 
                <label for="clientAddressCountry">Country</label>
                <input id="clientAddressCountry" type="text" /> 
            </fieldset>
            <label for="createAt">Invoice Date</label>
            <input id="createAt" type="date" />
            <label for="paymentTerms">Payment Terms</label>
            <input id="paymentTerms" type="select" />
            <label for="description">Project Description</label>
            <input id="description" type="text" />
            <h2>Item List</h2>
            <div className="items">
                <div>
                    <div className="itemNameColumn">
                        Item Name
                    </div>
                    <div className="qtyColumn">
                        Qty.
                    </div>
                    <div className="priceColumn">
                        Price
                    </div>
                    <div className="totalColumn">
                        Total
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <input className="itemNameColumn" type="text"  value="Banner Design"/>
                    <input className="qtyColumn" type="number" value="1" />
                    <input className="priceColumn" type="number" value="156" />
                    <div className="totalColumn">
                        156.00
                    </div>

                    <div className="delete">
                        <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fill="#888EB0" fill-rule="nonzero"/></svg>
                    </div>
                </div>
                <button className="addItemButton">
                    Add New Item
                </button>
            </div>
        </form>
    )
}
