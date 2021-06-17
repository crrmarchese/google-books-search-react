import React from 'react';
import Nav from "./components/Nav/Nav";
import Jumbotron from './components/Jumbotron/Jumbotron';
import Grid from './components/Grid/Grid';

// Prime React Library
import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <Grid />
    </div>
  );
}

export default App;