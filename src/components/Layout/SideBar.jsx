import React from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarDays, faCartArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MenuContext } from '../../context/menu';

function SideBar() {
    const [{ isCollapsed }] = React.useContext(MenuContext)

    return (
        <div className='h-100'>
            <div className="sidebar-menu">
                <ul className='list-unstyled' id='side-menu'>
                    <li className='menu-title mx-4 py-4'>Menu</li>
                    <li className='style-menu'>
                        <NavLink to="/users"
                            className='menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-items-center x'
                            activeclassname="active"
                        >
                            <div className="menu-pill">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            {!isCollapsed && <span>Users</span>}
                        </NavLink>
                    </li>
                    <li className='style-menu'>
                        <NavLink to="/calendar"
                            className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-items-center"
                        >
                            <div className="menu-pill">
                                <FontAwesomeIcon icon={faCalendarDays} />
                            </div>
                            {!isCollapsed && <span>Calendar</span>}

                        </NavLink>
                    </li>
                    <li className='style-menu'>
                        <NavLink to="/e-commerce" className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-items-center">
                            <div className="menu-pill">
                                <FontAwesomeIcon icon={faCartArrowDown} />
                            </div>
                            {!isCollapsed && <span>E-commerce</span>}
                        </NavLink>
                    </li>
                    <li className='style-menu'>
                        <NavLink to="/email" className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-items-center">
                            <div className="menu-pill">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            {!isCollapsed && <span>E-Email</span>}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar