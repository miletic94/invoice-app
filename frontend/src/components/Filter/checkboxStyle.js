export const checkboxStyle = {
    paddingRight: "1.3rem",
    border: "none",
    outline: "none",
    margin: "0.3rem 0.8rem",
    padding: 0,
    width: "1.5rem",
    height: "1.5rem",
    fontSize: "2.7rem",
    borderRadius: 0,
    backgroundColor:"var(--checkbox-background-color)",
    color: "transparent",
    "&:hover": {
        color:"var(--primary-color)"
    },
    "&.Mui-checked": {
        color: "var(--primary-color)",
        backgroundColor: "white",
        borderRadius: "0.2rem",
    },
    '& .MuiSvgIcon-root': { fontSize: "2.1rem" } 
}