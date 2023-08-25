import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGear, faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme';
import { MenuContext } from '../../context/menu';

export default function Header() {
    const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
    const [{ isCollapsed }, toggleMenu] = useContext(MenuContext);

    return (
        <header id='page-topbar'>
            <div className="navbar-header">
                <div className="d-flex w-100 justify-content-between">
                    <div>
                        <button onClick={toggleMenu} className='btn btn-sm px-3 font-size-15 header-item'>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div className='header-navigation d-flex align-items-center'>
                        <button className='theme-icon mx-4' onClick={toggleTheme}>
                            {
                                isDark ?
                                    <FontAwesomeIcon icon={faSun} style={{ color: "#fff" }} /> :
                                    <FontAwesomeIcon icon={faMoon} />
                            }
                        </button>
                        <FontAwesomeIcon icon={faUser} className='p-1' />
                        <FontAwesomeIcon icon={faGear} className='p-1 mx-2' />
                    </div>
                </div>
            </div>
        </header>
    )
}
