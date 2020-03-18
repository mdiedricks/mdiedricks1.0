import React from 'react'
import '../App.css';


export default function About() {
    return (
        <div className="main">
            <div className="container">
                <div className="mobile-stretcher">
                    <div className="intro-card">
                        <div className="profile-image">
                            profile pic
                        </div>
                        <div className="one-liner">
                            intro about me
                        </div>
                    </div>

                    <div className="mid-card">
                        <div className="line-liner">
                            why im in code
                        </div>
                        <div className="diagram">
                            cool picture
                        </div>
                    </div>

                    <div className="goal-card">
                        <div className="diagram">
                            cool picture
                        </div>
                        <div className="one-liner">
                            what i'm looking for
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
