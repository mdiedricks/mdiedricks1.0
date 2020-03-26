import React from 'react'
import '../App.css';
import ruby from '../assets/ruby.svg'
import python from '../assets/python.svg'
import rails from '../assets/rails.svg'
import psql from'../assets/postgresql.svg'
import heroku from '../assets/heroku.svg'
import arduino from '../assets/arduino.svg'
import mongodb from '../assets/mongodb.svg'
import typescript from '../assets/typescript.svg'
import nodejs from '../assets/nodejs.svg'


export default function Home() {
    return (
        <div className="main ">
            <div className="container">
                <div className="mobile-stretcher">
                    <div className="message">
                        <p>Hi, my name is Michael and I like building web tools!</p>
                    </div>

                    <div className="sub-text">
                        <p>My primary toolset</p>
                    </div>

                    <div className="skills">
                        <span id="react" title="React.js"><ion-icon name="logo-react"></ion-icon></span>
                        <span id="firebase" title="Firebase"><ion-icon name="logo-firebase"></ion-icon></span>
                        <span id="html" title="HTML5"><ion-icon name="logo-html5"></ion-icon></span>
                        <span id="css" title="CSS3"><ion-icon name="logo-css3"></ion-icon></span>
                        <span id="js" title="Javascript"><ion-icon name="logo-javascript"></ion-icon></span>
                    </div>
                    
                    {/* <div className="current-project">
                        <p>Check out what I'm currently working on</p>

                    </div> */}

                    <div className="sub-text">
                        <p>Currently learning</p>                    
                    </div>

                    <div className="new-skills">
                        {/* postgres, ruby, rails, python, arduino */}
                        <span title="Node"><ion-icon src={nodejs}></ion-icon></span>
                        <span title="Express"><ion-icon src={mongodb}></ion-icon></span>
                        <span title="Typescript"><ion-icon src={typescript}></ion-icon></span>
                    </div>


                    <div className="sub-text">
                        <p>I've also built things with</p>                    
                    </div>

                    <div className="other-skills">
                        {/* postgres, ruby, rails, python, arduino */}
                        <span title="Ruby"><ion-icon src={ruby}></ion-icon></span>
                        <span title="Rails"><ion-icon src={rails}></ion-icon></span>
                        <span title="Heroku"><ion-icon src={heroku}></ion-icon></span>
                        <span title="Python"><ion-icon src={python}></ion-icon></span>
                        <span title="PostgreSQL"><ion-icon src={psql}></ion-icon></span>
                        <span title="Arduino"><ion-icon src={arduino}></ion-icon></span>
                    </div>
                </div>              
            </div>
        </div>
    )
}
