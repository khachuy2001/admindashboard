import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false)     //mặc định là lighttheme

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }

    }, [!isDark])

    const toggleMenu = () => {
        setIsDark(!isDark)
    }

    const theme = isDark ? "dark" : ""      // Nếu isDark là true, theme sẽ có giá trị là "dark", ngược lại, theme sẽ có giá trị là chuỗi rỗng (light theme).

    return (
        <ThemeContext.Provider value={[{ theme, isDark }, toggleMenu]}>
            {children}
        </ThemeContext.Provider>
    )
}