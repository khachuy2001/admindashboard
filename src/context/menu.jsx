import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false)     //mặc định là lighttheme

    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed)
    }

    const menuClass = isCollapsed ? "collapsed" : ""      // Nếu isDark là true, theme sẽ có giá trị là "dark", ngược lại, theme sẽ có giá trị là chuỗi rỗng (light theme).

    return (
        <MenuContext.Provider value={[{ menuClass, isCollapsed }, toggleMenu]}>
            {children}
        </MenuContext.Provider>
    )
}