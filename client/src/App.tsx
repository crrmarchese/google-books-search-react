import React from 'react';
import Nav from "./components/Nav/Nav";
import SearchBooks from './views/SearchBooks';
import SavedBooks from './views/SavedBooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Prime React Library
import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

function App() {
  return (
    <Router>
       <div className="App">
        <Nav />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <SearchBooks />
            </Route>
            <Route exact path="/save">
              <SavedBooks />
            </Route>
          </Switch>
        </div>
      </div>
    </Router> 
  );
}

export default App;
