import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from './home';
// import Tutorial from './tutorial';
// import Nav from './nav';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={FallBack} />
      </Switch>
    </Router>
  );
};

export default App;
