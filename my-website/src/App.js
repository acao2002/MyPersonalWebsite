import React from 'react'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage'
import NotFound from './components/NotFound/NotFound';
import Organization from './components/Organization/Organization';
import Project from './components/Projects/Project';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <div className ="home-page">
                  <FrontPage/>
              </div>
          </Route>
          <Route exact path="/physiocare">
              <Project/>
          </Route>
          <Route exact path="/FTC15093">
              <Organization/>
          </Route>
          <Route>
              <NotFound/>
          </Route>
    
        </Switch>
      </BrowserRouter>
    </React.Fragment>
    
  )}

export default App;
