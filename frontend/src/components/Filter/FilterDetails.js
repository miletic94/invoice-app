import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function FilterDetails({filters}) {

    const {filteredInvoicesList} = useSelector(state => state.invoices)
    const [isMediaMobile, setIsMediaMobile] = useState(window.matchMedia("(max-width: 650px)").matches)
    
    window.addEventListener("resize", () => {
        setIsMediaMobile(window.matchMedia("(max-width: 650px)").matches)
    })

    const isPlural = (object) => {
        return object.length > 1
    }
    const totalInvoicesString = () => {
        return `
            ${!isMediaMobile ? `There ${isPlural(filteredInvoicesList) ? "are" : "is"}` : ""}
            
            ${filteredInvoicesList.length}
            ${isMediaMobile ? "total" : ""}
            ${isPlural(filteredInvoicesList) ? "invoices." : "invoice."}
        `
    }
    const groupedInvoicesString = () => {
        return filters.map((filter, index) => {
            const filterGroupedItems = filteredInvoicesList.filter(item => item.status === filter)
            return (`
                ${(index === 0 && !isMediaMobile) ? `There ${isPlural(filterGroupedItems) ? 'are' : 'is'}` : ""}
                ${filterGroupedItems.length}
                ${filter}
                ${isPlural(filterGroupedItems) ? "invoices" : "invoice"}
                ${index < filters.length - 1 ? ", and" : ""}
                `)
            })
        }         
    return (
        <p className="filterDescription">
            {filters.length === 0 ? totalInvoicesString() : groupedInvoicesString()}
        </p>
    )
}
