import { useTheme } from "../contexts/ThemeProvider";

import React from 'react'

export default function Theme({children}) {
    const theme = useTheme()
    return (
        <div className={theme}>
            {children}
        </div>
    )
}
