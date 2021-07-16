import React from 'react';
import { EditPhonePage, MainPage, NewPhonePage } from './pages';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ MainPage } />
      <Route path="/edit/:id" component={ EditPhonePage } />
      <Route path="/new/phone" component={ NewPhonePage } />
    </Switch>
  );
}

export default App;
