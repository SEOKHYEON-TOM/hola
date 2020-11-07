// React imports
import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import { withRouter } from 'react-router-dom'

// Local imports
import MainPage from './Container/MainPage/MainPage'
import Signup from './Container/Authentication/Signup/Signup';


function App(props) {
  return(
    <BrowserRouter history={props.history}>
      <div className="App">
        <Switch>
          <Route path='/main-page' exact render={() => <MainPage history={props.history}/>} />
          <Route path='/signup' exact render={() => <Signup history={props.history}/>} />

          <Redirect from='/' exact to='/main-page'/>
          <Route render = {() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default (withRouter(App));
