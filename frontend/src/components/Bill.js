import React from 'react'
import InfoBadge from "../components/InfoBadge/InfoBadge"
export default function Bill() {
    return (
        <div className="bill">

            <div className="dFlex spaceBetween billContainers">
                <div className="billStatus">
                    <span>Status</span>
                    <InfoBadge status="paid" />
                </div>
                <div className="billControls">
                    <button className="btnTernary">
                        Edit
                    </button>
                    <button className="btnSecondary">
                        Delete
                    </button>
                    <button className="btnPrimary">
                        Mark as Paid
                    </button>
                </div>
            </div>
            
            <div className="billContainers">
                <div className="billHeader">
                    <div>
                        <h4 className="id">
                            <span className="hashTag">#</span>
                            <span className="hash">XM9141</span>
                        </h4>
                        <p className="description">
                            Graphic Design
                        </p>
                    </div>
                    <div className="senderAddress">
                        <p className="street">
                            19 Union Terrace
                        </p>
                        <p className="city">
                            London
                        </p>
                        <p className="postCode">
                            E1 3EZ
                        </p>
                        <p className="country">
                            Great Britain
                        </p>
                    </div>
                </div>
                <div className="billInfo">
                    <div className="createAt">
                        <p className="fontBg">
                            Invoice Date
                        </p>
                        <div className="fontXBg">
                            21 Aug 2021
                        </div>
                    </div>
                    <div className="clientName">
                        <p className="fontBg">
                            Bill to
                        </p>
                        <div className="fontXBg">
                            Alex Grim
                        </div>
                    </div>
                    <div className="paymentDue">
                        <p className="fontBg">
                            Payment Due
                        </p>
                        <div className="fontXBg">
                            20 Sep 2021
                        </div>
                    </div>
                    <div className="clientAddress">
                        <p className="street">
                            19 Union Terrace
                        </p>
                        <p className="city">
                            London
                        </p>
                        <p className="postCode">
                            E1 3EZ
                        </p>
                        <p className="country">
                            Great Britain
                        </p>
                    </div>
                    <div className="clientEmail">
                        <p className="fontBg">
                            Sent to
                        </p>
                        <div className="fontXBg">
                            alexgrim@eamail.com
                        </div>
                    </div>
                </div>
                <table className="billTable mobile">
                    
                    <tbody>
                        <tr>
                            <td>
                                <div className="itemName fontBgBold">Banner Design</div>
                                <div className="fontBgBold qtyTimesPrice">
                                    <span className="qty">1 </span>
                                    <span>x </span>
                                    <span className="currency">£ </span>
                                    <span className="amount">156.00</span>
                                </div>
                            </td>
                            <td className="subtotal fontBgBold">
                                <span className="currency">£</span>
                                <span className="amount">156.00</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="itemName fontBgBold">Banner Design</div>
                                <div className="fontBgBold qtyTimesPrice">
                                    <span className="qty">1 </span>
                                    <span>x </span>
                                    <span className="currency">£ </span>
                                    <span className="amount">156.00</span>
                                </div>
                            </td>
                            <td className="subtotal fontBgBold">
                                <span className="currency">£</span>
                                <span className="amount">156.00</span>
                            </td>
                        </tr>
                        <tr className="grandTotal fontSm">
                            <td>
                                Amount Due
                            </td>
                            <td className="price">
                                <span className="currency">£ </span>
                                <span className="amount">556.00</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="billTable desktop">
                    <tbody>
                        <tr>
                            <th className="itemNameColumn fontSm">
                                Item Name
                            </th>
                            <th className="qtyColumn fontSm">
                                QTY.
                            </th>
                            <th className="priceColumn fontSm">
                                Price
                            </th>
                            <th className="totalColumn fontSm">
                                Total
                            </th>
                        </tr>
                        <tr>
                            <td className="itemNameColumn fontBgBold">
                                Banner Design
                            </td>
                            <td className="qtyColumn fontBgBold">
                                1
                            </td>
                            <td className="priceColumn fontBgBold">
                                <span>£ </span>
                                <span>156.00</span>
                            </td>
                            <td className="totalColumn fontBgBold">
                                <span>
                                    £
                                </span>
                                <span>
                                    156.00
                                </span>
                            </td>
                        </tr>
                        <tr className="grandTotal">
                            <td colSpan="2 fontSm">
                                Amount Due
                            </td>
                            <td colSpan="2" className="price">
                                <span className="currency">£ </span>
                                <span className="amount">556.00</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
