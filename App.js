import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex'; 
import PokemonDetails from './components/PokemonDetails'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokédex</h1>
      </header>
      <main>
        
        <Router>
          <Switch>
            <Route path="/" exact component={Pokedex} />
            <Route path="/pokemon/:id" component={PokemonDetails} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
