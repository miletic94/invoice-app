import { useState, useEffect } from "react"
import {Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import { checkboxStyle } from "./checkboxStyle"
import React from 'react'
import Label from "./Label"
import {useDispatch} from "react-redux"
import { filterInvoicesList } from "../../redux/actions/invoicesListActions"
import FilterDetails from "./FilterDetails"

export default function Filter() {
    const [displayCheckboxMenu, setDisplayCheckboxMenu] = useState(false)
    const toggleCheckboxMenu = () => {
        setDisplayCheckboxMenu(prev => !prev)
    }
    const toggleDisplayCheckbox = !displayCheckboxMenu ? {display:"none"}: {}

    const dispatch = useDispatch()
    const [filters, setFilters] = useState([])
    const handleCheckedToggle = (event) => {
        setFilters(previousFilters => {
            return (
            !!previousFilters.find(filter => filter === event.target.value) ? 
            previousFilters.filter(filter => filter !== event.target.value) :
            [...previousFilters, event.target.value]
            )
        })
    }

    useEffect(() => {
        dispatch(filterInvoicesList(filters))
    }, [dispatch, filters])

       
    
    return (
        <div className="filter">
            <div className="filterHeader">
                <div>
                    <h1 className="title">Invoices</h1>
                    <FilterDetails filters={filters} />
                </div>
                <div className="filterSwitch fontBg" onClick={toggleCheckboxMenu}>
                    Filter by Status
                    <span>
                        <svg className={`arrowDown${displayCheckboxMenu ? " rotate180" : ""}`} width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                    </span>
                    <FormGroup className={`checkboxMenu${displayCheckboxMenu && " dNone"}`}>
                <FormControlLabel
                    control={<Checkbox sx={checkboxStyle} value="draft" onChange={handleCheckedToggle}/>}
                    label={<Label className="fontBgBold" text="Draft"/>}
                    style={toggleDisplayCheckbox}
                />
                <FormControlLabel
                    control={<Checkbox sx={checkboxStyle} value="pending" onChange={handleCheckedToggle}/>}
                    label={<Label className="fontBgBold" text="Pending"/>}
                    style={toggleDisplayCheckbox}
                />
                <FormControlLabel
                    control={<Checkbox sx={checkboxStyle} value="paid" onChange={handleCheckedToggle}/>}
                    label={<Label className="fontBgBold" text="Paid"/>}
                    style={toggleDisplayCheckbox}
                />
            </FormGroup>
                </div>
            </div>
        </div>
    )
}
