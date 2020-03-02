import React, { createContext } from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import HomePage from './HomePage';
import Resume from './resume/Resume';

const App=() => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/xujiaqi" exact component={HomePage} />
      <Route path="/resume" component={Resume} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
