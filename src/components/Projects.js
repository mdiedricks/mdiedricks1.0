import React from 'react'

export default function Projects(props) {

    const projects = props.projects.map((e, index) => (
        <div key={index} id={e.id} className="project-card">
            <div className="project-image">
                <a href="https://placeholder.com/">
                <img src={e.image} alt="sourceImage"/></a>  
            </div>
            <div className="project-info">
                <h2>{e.title}</h2>
                <h4>{e.subtitle}</h4>
                <div className="technologies">
                    <ul>
                        {e.technologies.map((f, index) => (
                        <li key={index}> <ion-icon name={f}></ion-icon></li>
                        ))}
                        <li><a href={e.link}><ion-icon name="logo-github"></ion-icon></a></li>
                    </ul>
                </div>
                <h5>description</h5>
                <p>{e.description}</p>
                <h5>challenges</h5>
                <p>{e.challenges}</p>
                <p><a href={e.liveVersion}>Try it out!</a></p>
            </div>
        </div>
    ))

    return (
        <div className="main" >
            <div className="container">

                <div className="project-controls">
                    <div className="toggle" onClick={props.controls.handleToggleLeft}>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <h3 className="toggle-title">my projects</h3>
                    <div className="toggle" onClick={props.controls.handleToggleRight}>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>    
                </div>
                
                <div className="project-content">
                    {projects}
                </div>

            </div>
        </div>
    )
}
