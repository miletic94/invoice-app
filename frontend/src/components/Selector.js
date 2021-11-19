import React from 'react'
import Select from "react-select"

export default function Selector(props) {
    const options = [
        {value: "Aja", label: "Aja"}, 
        {value: "Nemanja", label: "Nemanja"}
      ]
      const customStyles = {
        container: (provided, state) => ({
          ...provided,
          width: "50%",
          maxWidth: "24rem"
        }),
        control: (provided, state) => ({
          ...provided,
          borderRadius: "4px",
          height: "4.8rem",
          backgroundColor: "var(--banner-background-color);",
          fontSize: "30px",
          cursor: "pointer",
          border: state.isFocused ? "solid 1px var(--input-outline-active-color)" : "solid 1px var(--input-outline-default-color)"
        }),
        indicatorSeparator: (provided, state) => ({
          display: "none"
        }),
        indicatorsContainer: (provided, state) => ({
          ...provided,
          height: "4.8rem"
        }),
        dropdownIndicator: (provided, state) => ({
          ...provided,
          color: "var(--primary-color)",
          transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "",
          cursor: "pointer",
          "&:hover": {
            color: "var(--primary-color)"
          }
        }),
        valueContainer: (provided, state) => ({
          boxSizing: "border-box",
          height: "4.8rem",
          width: "2rem",
          padding: "1.7rem 2rem"
        }),
        singleValue: (provided, state) => ({
          font: "Spartan",
          fontSize: "1.2rem",
          fontStyle: "normal",
          fontheight: "700",
          lineHeight: "15px",
          letterSpacing: "-0.25px",
          color: "var(--banner-text-color)",
        }),
        placeholder: (provided, state) => ({
          font: "Spartan",
          fontSize: "1.2rem",
          fontStyle: "normal",
          fontheight: "700",
          lineHeight: "15px",
          letterSpacing: "-0.25px",
          color: "var(--banner-text-color)",
        }),
        menu: (provided, state) => ({
          ...provided,
          border: "none", 
          outline: "none",
          boxShadow: "0px 10px 20px rgba(72, 84, 159, 0.25)",
          backgroundColor: "var(--banner-background-color)",
          borderRadius: "8px"
        }),
        menuList: (provided, state) => ({
          ...provided, 
          borderRadius: "8px"
        }),
        option: (provided, state) => ({
          ...provided,
          width: "100%",
          padding: "1.5rem 2.4rem",
          font: "Spartan",
          fontSize: "1.2rem",
          fontStyle: "normal",
          fontheight: "700",
          lineHeight: "15px",
          letterSpacing: "-0.25px",
          cursor: "pointer",
          color: "var(--banner-text-color)",
          backgroundColor: "var(--banner-background-color)",
          "&:hover": {
            color: "var(--primary-color)"
          }
        })
      }
    return (
        <div>
            <Select 
                styles = {customStyles}
                options = {options}
                isSearchable={false}
                defaultValue={{value: "Aja", label: "Aja"}}
            />            
        </div>
    )
}
