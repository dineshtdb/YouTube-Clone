import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
function Navbar() {
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img src={menu_icon} />
                <img className='logo' csrc={logo}/>
            </div>

            <div className="navimiddle flex-div">
                <input type='text' placeholder='search'/>
                <img src={search_icon}/>
            </div>
            <div className="nav-right flex-div">

            </div>

        </nav>
    );
}

export default Navbar;