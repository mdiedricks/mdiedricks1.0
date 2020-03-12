import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Import components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/mdiedricks"><Home/></Route>
          <Route exact path="/projects"><Projects /></Route>
          <Route exact path="/about"><About /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
