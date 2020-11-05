import React from 'react';
import './App.css';
import Cards from './card.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Resume from './resume.js';




function App(){
  return(
    <div>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Route exact path="/" component={Cards}/>
    <Route exact path="/resume" component={Resume}/>
    </BrowserRouter>
    </div>


    );
}

export default App;
