import React from 'react'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage'
import NotFound from './components/NotFound/NotFound';

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
          <Route>
              <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
    
  )}

export default App;
