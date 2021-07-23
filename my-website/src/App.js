import React from 'react'; 
import {HashRouter,BrowserRouter, Switch, Route} from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage'
import NotFound from './components/NotFound/NotFound';
import Organization from './components/Organization/Organization';
import Project from './components/Projects/Project';
import CommingS from './components/Projects/CommingS';
import Trash from './components/Projects/Trash';
import Voice from './components/Projects/Voice';
import Snake from './components/Projects/Snake';
import Chatbot from './components/Projects/Chatbot';
import Vigg from './components/Projects/Vigg';
import Models from './components/Projects/Models';
import Rocket from './components/Projects/GameDev';
import Patent from './components/Projects/Patent';
import ViggOrg from './components/Organization/ViggOrg';
import GameDev from './components/Projects/GameDev';

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
          <Route exact path="/SmartBin">
              <Trash/>
          </Route>
          <Route exact path="/VoiceAssistant">
              <Voice/>
          </Route>
          <Route exact path="/AIsnake">
              <Snake/>
          </Route>
          <Route exact path="/AnChatBot">
              <Chatbot/>
          </Route>
          <Route exact path="/game-creation">
              <GameDev/>
          </Route>
          <Route exact path="/Vigg">
              <Vigg/>
          </Route>
          <Route exact path="/Viggst">
              <ViggOrg/>
          </Route>
          <Route exact path="/Pmodels">
              <Models/>
          </Route>
          <Route exact path="/FTC15093">
              <Organization/>

          </Route>
          <Route exact path= "/patent">
              <Patent/>
          </Route>
          <Route exact path= "/cms">
              <CommingS/>
          </Route>

          <Route>
              <NotFound/>
          </Route>

    
        </Switch>
      </BrowserRouter>
    </React.Fragment>
    
  )}

export default App;
