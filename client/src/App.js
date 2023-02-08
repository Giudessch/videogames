import React from 'react';
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"
import Home from "./containers/Home/home.jsx"
import Create from "./containers/Create/Create.jsx"
import About from "./components/About/About.jsx"
import Details from "./containers/Details/details.jsx";
import "./App.css";
import Search from './containers/SearchBar/SearchBar.jsx';

function App() {

  return (
    <div className="App">
      <React.Fragment>
        <Route exact path="/" component={LandingPage} />

        <Route path="/home" component={NavBar} />
        <Route exact path="/home" component={Home} />

        <Route path="/results/:name" component={Search} />
        <Route path="/videogames" component={NavBar} />
        <Route
          exact path="/videogames/:id"
          render={({ match }) => < Details id={match.params.id} />}
        />

        <Route path="/create" component={NavBar} />
        <Route path="/create" exact component={Create} />

        <Route path="/about" component={NavBar} />
        <Route path="/about" component={About} />
        
      </React.Fragment>
    </div>
  );
}

export default App;