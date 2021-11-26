import React, { useEffect } from "react";
import SummaryBanner from "./SummaryBanner";
import { useDispatch, useSelector } from "react-redux";
import { getInvoicesList } from "../redux/actions/invoicesListActions";
import ReactLoading from "react-loading";
import ErrorMessage from "./ErrorMessage/ErrorMessage.js";
import Filter from "./Filter/Filter";

export default function SummarList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInvoicesList());
  }, [dispatch]);
  const { loading, filteredInvoicesList, error } = useSelector(
    (state) => state.invoices
  );
  return (
    <div className="summaryList">
      {loading ? (
        <ReactLoading
          type="bars"
          color="var(--primary-color)"
          className="reactLoading"
        />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : filteredInvoicesList.length === 0 ? (
        <img
          className="empty"
          src="./assets/illustration-empty.svg"
          alt="empty summary"
        />
      ) : (
<div>

        <div className="summaryBannerWrapper">
        <div className="summaryListHeader">
      <Filter />
      <button className="btnPrimary addInvoiceButton">
        <div className="circle white">
          <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fillRule="nonzero"/></svg>
        </div>
        <pres>New <span className="desktop">Invoice</span></pres>
        
      </button>
    </div>
        </div>


  <div className="summaryList">
    {filteredInvoicesList.map((item) => {
      return (
        <SummaryBanner
          key={item.id}
          id={item.id}
          paymentDue={item.paymentDue}
          clientName={item.clientName}
          total={item.total}
          status={item.status}
        />
      );
    })}
  </div>
</div>
      )}
    </div>
  );
}
