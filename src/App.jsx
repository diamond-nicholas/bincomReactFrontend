import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './routes/home';
import pu from './routes/pu';
import sumPu from './routes/sumPu';
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={home} />
          <Route exact path='/pu/:id' component={pu} />
          <Route exact path='/' component={sumPu} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
