import React, { useEffect } from "react";
import InfoBadge from "../components/InfoBadge/InfoBadge";
import { useParams } from "react-router";
import { getInvoiceDetails } from "../redux/actions/invoiceDetailsActions";
import { useDispatch, useSelector } from "react-redux";
import { useDateString } from "../hooks/useDateString";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ReactLoading from "react-loading";

export default function Bill() {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, details, error } = useSelector(
    (state) => state.invoiceDetails
  );

  const createdAt = useDateString(details.createdAt);
  const paymentDue = useDateString(details.paymentDue);

  useEffect(() => {
    dispatch(getInvoiceDetails(params.id));
  }, [dispatch, params]);

  return (
    <div className="bill">
      {loading ? (
        <ReactLoading
          type="bars"
          color="var(--primary-color)"
          className="reactLoading"
        />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <div className="dFlex spaceBetween billContainers">
            <div className="billStatus">
              <span>Status</span>
              <InfoBadge status={details.status} />
            </div>
            <div className="billControls">
              <button className="btnTernary">Edit</button>
              <button className="btnSecondary">Delete</button>
              <button className="btnPrimary"
                disabled={details.status === "paid"}
                onClick={() => console.log("object")}
              >Mark as Paid</button>
            </div>
          </div>

          <div className="billContainers">
            <div className="billHeader">
              <div>
                <h4 className="id">
                  <span className="hashTag">#</span>
                  <span className="hash">{details.id}</span>
                </h4>
                <p className="description">{details.description}</p>
              </div>
              <div className="senderAddress">
                <p className="street">
                  {details.senderAddress
                    ? details.senderAddress.street
                    : undefined}
                </p>
                <p className="city">
                  {details.senderAddress
                    ? details.senderAddress.city
                    : undefined}
                </p>
                <p className="postCode">
                  {details.senderAddress
                    ? details.senderAddress.postCode
                    : undefined}
                </p>
                <p className="country">
                  {details.senderAddress
                    ? details.senderAddress.country
                    : undefined}
                </p>
              </div>
            </div>
            <div className="billInfo">
              <div className="createAt">
                <p className="fontBg">Invoice Date</p>
                <div className="fontXBg">{createdAt}</div>
              </div>
              <div className="clientName">
                <p className="fontBg">Bill to</p>
                <div className="fontXBg">{details.clientName}</div>
              </div>
              <div className="paymentDue">
                <p className="fontBg">Payment Due</p>
                <div className="fontXBg">{paymentDue}</div>
              </div>
              <div className="clientAddress">
                <p className="street">
                  {details.clientAddress
                    ? details.clientAddress.street
                    : undefined}
                </p>
                <p className="city">
                  {details.clientAddress
                    ? details.clientAddress.city
                    : undefined}
                </p>
                <p className="postCode">
                  {details.clientAddress
                    ? details.clientAddress.postCode
                    : undefined}
                </p>
                <p className="country">
                  {details.clientAddress
                    ? details.clientAddress.country
                    : undefined}
                </p>
              </div>
              <div className="clientEmail">
                <p className="fontBg">Sent to</p>
                <div className="fontXBg">{details.clientEmail}</div>
              </div>
            </div>
            <table className="billTable mobile">
              <tbody>
                {
                details.items &&
                details.items.map((item, index) => {
                    return (
                    <tr key={index}>
                    <td>
                      <div className="itemName fontBgBold">{item.name}</div>
                      <div className="fontBgBold qtyTimesPrice">
                        <span className="qty">{item.quantity}</span>
                        <span>x </span>
                        <span className="currency">£ </span>
                        <span className="amount">{item.price}</span>
                      </div>
                    </td>
                    <td className="subtotal fontBgBold">
                      <span className="currency">£</span>
                      <span className="amount">{item.total}</span>
                    </td>
                  </tr>
                )
                })}
                <tr className="grandTotal fontSm">
                  <td>Amount Due</td>
                  <td className="price">
                    <span className="currency">£ </span>
                    <span className="amount">{details.total}</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="billTable desktop">
              <tbody>
                <tr>
                  <th className="itemNameColumn fontSm">Item Name</th>
                  <th className="qtyColumn fontSm">QTY.</th>
                  <th className="priceColumn fontSm">Price</th>
                  <th className="totalColumn fontSm">Total</th>
                </tr>
                {details.items
                  ? details.items.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="itemNameColumn fontBgBold">
                            {item.name}
                          </td>
                          <td className="qtyColumn fontBgBold">
                            {item.quantity}
                          </td>
                          <td className="priceColumn fontBgBold">
                            <span>£ </span>
                            <span>{item.price}</span>
                          </td>
                          <td className="totalColumn fontBgBold">
                            <span>£</span>
                            <span>{item.total}</span>
                          </td>
                        </tr>
                      );
                    })
                  : undefined}
                <tr className="grandTotal">
                  <td colSpan="2 fontSm">Amount Due</td>
                  <td colSpan="2" className="price">
                    <span className="currency">£ </span>
                    <span className="amount">{details.total}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
        //
      )}
    </div>
  );
}
