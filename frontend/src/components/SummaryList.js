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
  <Filter />
  
  <div className="summaryList">
    {filteredInvoicesList.map((item) => {
      return (
        <SummaryBanner
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
