import React, { useContext, useState } from "react"

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("darkTheme") // set up with prefers-color-scheme
    const toggleTheme = () => {
        setTheme(prevTheme => {
            if(prevTheme === "darkTheme") {
                return "lightTheme"
            }
            return "darkTheme"
        })
    }

    return (
        <ThemeContext.Provider value = {theme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}
