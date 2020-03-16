import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Import components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  const [currentProject, setCurrentProject] = useState(1);



  const projects = [
    {
        title: 'CoWandr',
        id: 'p1',
        subtitle: 'Collaborative travel planner',
        description: `In Planning Phase - CoWandr was conceived out of the necessity to streamline the pains of planning a trip with multiple people. Whether you're planning a family holiday overseas or an overnight trip away with friends, we hope CoWandr will be a useful tool for everyone. `,
        technologies: ["logo-react","logo-firebase"],
        link: "https://bitbucket.org/cowandr/cowandr-firebase/src/master/"
    }
    ,{
        title: 'QuestLog',
        id: 'p2',
        subtitle: 'Keep track of your characters - in and out of combat',
        description: 'Simple game-tracker for Dungeons & Dragons types games.', 
        technologies: ['logo-react', 'logo-firebase'],
        link: "https://github.com/mdiedricks/questlog"
    }
    // ,{
    //     title: 'Ask Toad',
    //     id: 'p3',
    //     subtitle: 'Generate companion planting combinations',
    //     description: 'Generate and save plant combinations for your garden. This generator allows you to create 3-way plant combinations with suggestions for other plant pairings.', 
    //     technologies: ["logo-react","logo-firebase"],
    //     link: "https://bitbucket.org/cowandr/cowandr-firebase/src/master/"
    // }
    ,{
        title: '8Bit TicTacToe',
        id: 'p3',
        subtitle: 'A retro themed classic',
        description: 'Simple game-tracker for Dungeons & Dragons types games.',
        technologies: ["logo-javascript"],
        link: "https://github.com/mdiedricks/gaproject00"
    }
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
    if (projectNumber === 3) {
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
