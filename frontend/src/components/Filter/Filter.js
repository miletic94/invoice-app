import { useState } from "react"
import {Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import { checkboxStyle } from "./checkboxStyle"
import React from 'react'
import Label from "./Label"

export default function Filter() {
    const [displayCheckboxMenu, setDisplayCheckboxMenu] = useState(false)
    const toggleCheckboxMenu = () => {
        setDisplayCheckboxMenu(prev => !prev)
    }
    const toggleDisplayCheckbox = !displayCheckboxMenu ? {display:"none"}: {}

    return (
        
        <div className="filter">
            <div className="filterSwitch fontBg" onClick={toggleCheckboxMenu}>
                Filter by Status
                <span>
                    <svg className={`arrowDown${displayCheckboxMenu && " rotate180"}`} width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                </span>
            </div>
            <FormGroup className={`checkboxMenu${displayCheckboxMenu && " dNone"}`}>
                <FormControlLabel
                    control={<Checkbox sx={checkboxStyle} />}
                    label={<Label className="fontBgBold" text="Draft"/>}
                    style={toggleDisplayCheckbox}
                />
                <FormControlLabel
                    control={<Checkbox sx={checkboxStyle}/>}
                    label={<Label className="fontBgBold" text="Pending"/>}
                    style={toggleDisplayCheckbox}
                />
                <FormControlLabel
                    control={<Checkbox sx={checkboxStyle}/>}
                    label={<Label className="fontBgBold" text="Paid"/>}
                    style={toggleDisplayCheckbox}
                />
            </FormGroup>
        </div>
    )
}
