import React from 'react';
import { EditPage,MainPage } from './pages';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ MainPage } />
      <Route path="/edit/:id" component={ EditPage } />
    </Switch>
  );
}

export default App;
