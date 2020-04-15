import Books from './pages/Books';
import Nav from './components/Nav';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
