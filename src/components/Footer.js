import React from 'react'
import '../App.css';
import resume from '../assets/mdiedricks_2020.pdf'

export default function Footer() {
    return (
        <footer>
            <div className='container'>                
                <div className="footer">
                    <a href='mailto:michael.diedricks@gmail.com'  className='nav-item'>
                        <ion-icon name="mail"></ion-icon>
                    </a>
                    <a href='https://www.linkedin.com/in/mdiedricks/'  className='nav-item'>
                        <ion-icon name="logo-linkedin" ></ion-icon>
                    </a>
                    <a href='https://github.com/mdiedricks' className='nav-item'>
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <a href='https://twitter.com/mdiedricks_' className='nav-item'>
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                    <a href={resume} download className='nav-item'>
                        <ion-icon name="document-text"></ion-icon>
                    </a>
                </div>
            </div>
        </footer>
    )
}
