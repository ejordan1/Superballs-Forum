import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SecondLink from './SecondLink';
import HomePage from './HomePage';
import Header from './Header';

function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/secondlink' component={SecondLink} />
      </Switch>
    </div>
  );
}

export default App;
