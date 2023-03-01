import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Views/Home';
import CharacterQuotes from '../../Views/CharacterQuotes';
import FavoritesView from '../../Views/FavoritesView';
import ErrorView from '../../Views/ErrorView';


class App extends Component {
  constructor(){
    super();
    this.state = {
      favorites: [],
  }
}
  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/character/:characterName" render={({match}) => <CharacterQuotes name={match.params.characterName}/>}/>
          <Route exact path ="/favorites" render={() => <FavoritesView favorites={this.state.favorites}/>}/>
          <Route path="*" render={() => <ErrorView message="Page Not Found"/>} />
        </Switch>
      </main>
    );
  }
}

export default App;
