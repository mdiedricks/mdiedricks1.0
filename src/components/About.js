import React from 'react'
import '../App.css';
import profile from '../assets/headshot.svg';


export default function About() {
    return (
        <div className="main">
            <div className="container">
                <div className="card">
                    <img src={profile} alt="it's me"/>
                    <div className="text-block">
                        <p className="main-line">I'm a graduate developer with a background in architecture who likes building smart-tools that help humans achieve more.</p>
                        <p className="one-liner"> I'm driven by the enabling power of software to augment and improve the human experience. I like working with self-motivated individuals who, like me, always seem to have a passion-project in the works. 
                        </p>
                    </div>
                    
                    
                </div>

                <div className="card-reverse">
                    <img src={profile} alt="it's me"/>
                    <div className="text-block">
                        <p className="main-line">I'm fascinated by the way a piece of software can be scaled to help thousands of people solve every day problems.</p>
                        <p className="one-liner">
                         I want to build tools that add value to people's lives, filling in the gaps of human capabilities. Software is to us what fire was to the cave man, and I want to learn and use all it has to offer.
                        </p>
                    </div>
                </div>

                <div className="card">                        
                    <img src={profile} alt="it's me"/>
                    <div className="text-block">
                        <p className="main-line">I'm looking for a role where I can work with a team building tools to help people and businesses achieve their goals.</p>
                        <p className="one-liner">
                         I want to further develop my interest in design systems to help my team coordinate their efforts in building those tools. And I hope to better understand the business of software development.
                        </p>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}
