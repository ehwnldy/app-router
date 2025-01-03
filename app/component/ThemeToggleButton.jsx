'use client'

import { useContext } from 'react'
import { ThemeContext } from "../context/ThemeContext"

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <button onClick={toggleTheme}>
            {theme === 'light' ? "Dark Mode" : "Light Mode"}
        </button> 
    )
} 

export { ThemeToggleButton }