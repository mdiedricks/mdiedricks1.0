import React  from 'react'
import '../App.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
    
    const handlePage = () => {
        console.log("newpage");
        document.querySelector('.nav-toggle').checked = false;
        // document.querySelector('.nav-project-toggle').checked = false;
    }

    // const handleProject = (e) => {
    //     console.log('HandleProject clicked')
    //     document.querySelector('.nav-toggle').checked = false;
    //     document.querySelector('.nav-project-toggle').checked = false;
    //     // console.log(e.target.id);
    //     let linkId = document.querySelector(e.target.id);
    //     console.log(`Link id is: `, linkId);
    //     let projectDiv = document.getElementsByClassName(linkId);
    //     console.log(`Div is: `, projectDiv);
    //     projectDiv[0].style.display = 'block';
    // }
    
    return (
        <nav>
            <div className="container">
                <div className="navbar">
                    <a href='/mdiedricks'>
                        <div className='nav-left brand'>
                            <ion-icon name="skull"></ion-icon>
                            <span className="title-logo">michael diedricks</span>
                            
                        </div>
                    </a>

                    <input type="checkbox" id="nav-toggle" name="nav-toggle" className="nav-toggle"/>        
                    <div className='nav-right'>
                        <ul>
                            <li><Link to='/mdiedricks' onClick={handlePage}>home</Link></li>                          
                            <li><Link to='/about' onClick={handlePage}>about</Link></li>
                            <li><Link to='/projects' onClick={handlePage}>projects</Link></li>
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
