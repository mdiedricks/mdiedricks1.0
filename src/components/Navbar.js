import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="navbar">
                    <a href='/'>
                        <div className='nav-left'>
                            <ion-icon name="skull"></ion-icon>
                            <span className="brand">michael diedricks</span>
                        </div>
                    </a>

                    <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
                    
                    {/* <div className='ham-right'>
                        <ul>
                            <li><Link to='/'>home</Link></li>
                            <li><Link to='/projects'>projects</Link></li>
                            <li><Link to='/about'>about</Link></li>
                        </ul>
                    </div> */}

                    <div className='nav-right'>
                        <ul>
                            <li><Link to='/'>home</Link></li>
                            <li><Link to='/projects'>projects</Link></li>
                            <li><Link to='/about'>about</Link></li>
                        </ul>
                    </div>
                    <label htmlFor="nav-toggle" className="nav-toggle-label">
                        <span><ion-icon name="menu-outline"></ion-icon></span>
                    </label>
                </div>
            </div>
        </nav>
    )
}
