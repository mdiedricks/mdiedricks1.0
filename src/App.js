import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import ticTac from './assets/tictactoe.png'
import cowandr from './assets/cowandr.png'
import questlog from './assets/questlog.png'

function App() {
  const [currentProject, setCurrentProject] = useState(1);

  const projects = [
    {
      title: 'Sundancer - Weather App',
      id: 'p1',
      subtitle: 'Simple weather app using OpenWeatherAPI',
      description: `I built this simple weather app using Vanilla JS as an exercise in trying to build something generic with a personal spin on it. The only cities available are cities personally relevant to myself.`,
      challenges: `Building the app without any JavaScript frameworks was an exercise in getting back to the fundamentals and not relying on React to do the heavy lifting.`,
      technologies: ["logo-javascript"],
      link: "https://github.com/mdiedricks/sundancer",
      liveVersion: '',
      image: cowandr
    }
    ,{
      title: 'Philips Dynalite - JS Module',
      id: 'p2',
      subtitle: 'Custom dashboard functions',
      description: `This set of functions is designed for people wanting to build a custom dashboard for their Philips Dynalite systems, with little to no JavaScript knowledge. I was approached by a friend wanting to set up his own dashboard to send and receive commands to a Dynalite server, but he wasn't sure how to build the functions in JavaScript.`,
      challenges: `I didn't have a Dynalite server to test my functions were sending/receiving correctly, so the process required me to write some code, send it to my friend and he tested it. This eventually resulted in a live scripting session involving screensharing and tapping into another friends home Dynalite system.`,
      technologies: ["logo-javascript"],
      link: "https://github.com/mdiedricks/philips-dynalite",
      liveVersion: '',
      image: cowandr
    }
    ,{
        title: 'CoWandr - Work in Progress',
        id: 'p3',
        subtitle: 'Collaborative travel planner',
        description: `CoWandr was conceived out of the necessity to streamline the pains of planning a trip with multiple people. My partner and I wanted to build an application that we wanted to use, with the features we wished we had on our holidays.`,
        challenges: `Having never built a collaborative app before, the challenges lying ahead will focus a lot on getting real-time feedback to make the user-experience as seamless as possible.`,
        technologies: ["logo-react","logo-firebase"],
        link: "https://bitbucket.org/cowandr/cowandr-firebase/src/master/",
        liveVersion: '',
        image: cowandr
    }
    ,{
        title: 'QuestLog - Work in Progress',
        id: 'p4',
        subtitle: 'Keep track of your characters',
        description: `Simple game-tracker for Dungeons & Dragons types games. I always wanted to have my own game tracker with the features I thought would be important to a game master. Some applications either have too many unnecessary tools, or some don't have enough tools, or the data isn't persisted. This is a balance I invisioned.`,
        challenges: `Never used Firebase before, or NoSQL databases. Both presented their own challenges. On the front-end I was also experimenting with an unfamiliar CSS framework (Bulma) which took some getting used to.`,
        technologies: ['logo-react', 'logo-firebase'],
        link: "https://github.com/mdiedricks/questlog",
        liveVersion: '',
        image: questlog
    }
    ,{
        title: '8Bit TicTacToe',
        id: 'p5',
        subtitle: 'A retro themed classic',
        description: 'Project 0 at General Assembly - I chose an 8Bit theme with reverence to my childhood. I tried to mimic how NES games used to look and function complete with an arbitrary starry background.',
        technologies: ["logo-javascript"],
        challenges: `This was the first project I used JQuery on which presented it's own challenges. But the main lesson learned here was using and setting states. I didn't know how important this was going to be later in my career.`,
        link: "https://github.com/mdiedricks/gaproject00",
        liveVersion: 'https://mdiedricks.github.io/gaproject00/',
        image: ticTac
    }
    //,{
  //     title: 'Ask Toad',
  //     id: 'p6',
  //     subtitle: 'Generate companion planting combinations',
  //     description: 'Generate and save plant combinations for your garden. This generator allows you to create 3-way plant combinations with suggestions for other plant pairings.', 
  //     technologies: ["logo-react","logo-firebase"],
  //     challenges: ``,
  //     link: "https://",
  //     liveVersion: '',
  //     image: ticTac
  // }
]

  const handleArrowLeft = () => {
    let projectNumber = parseInt(currentProject);
    // console.log(projectNumber);
    if (projectNumber === 1) {
      return;
    } else {
      let oldDiv = document.getElementById('p'+projectNumber);
      oldDiv.style.display = 'none';
      projectNumber -= 1;
      setCurrentProject(projectNumber);
      // console.log(projectNumber);
      let newDiv = document.getElementById('p'+projectNumber);
      newDiv.style.display = 'flex';
    } 
  }

  const handleArrowRight = () => {
    let projectNumber = parseInt(currentProject);
    // console.log(projectNumber);
    if (projectNumber === 5) {
      return;
    } else {
      let oldDiv = document.getElementById('p'+projectNumber);
      oldDiv.style.display = 'none';
      projectNumber += 1;
      setCurrentProject(projectNumber);
      // console.log(projectNumber);
      let newDiv = document.getElementById('p'+projectNumber);
      newDiv.style.display = 'flex';
    } 
  }

  const controls = {
    handleToggleLeft: handleArrowLeft,
    handleToggleRight: handleArrowRight
  }


  return (
    <Router >
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/mdiedricks"><Home/></Route>
          <Route exact path="/projects"><Projects controls={controls} projects={projects}/></Route>
          <Route exact path="/about"><About /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
