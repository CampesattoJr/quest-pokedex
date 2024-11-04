import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#1f293a',
        background: '#eee',
        backgroundImg: '../../public/light-theme.jpg'
    },
    dark: {
        color: '#0ef',
        background: '#1f293a',
        backgroundImg: '../../public/dark-theme.jpg'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}