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
  addFavorite = (quote) => {
  this.setState({favorites: [...this.state.favorites, quote]})
  }
  deleteFavorite = (quote) => {
    let newFavorites = this.state.favorites.filter((favorite) => {
      return favorite !== quote})
    this.setState({favorites: newFavorites})}

  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/character/:characterName" render={({match}) => <CharacterQuotes 
          addFavorite={this.addFavorite}
          name={match.params.characterName}/>}/>
          <Route exact path ="/favorites" render={() => <FavoritesView deleteFavorite={this.deleteFavorite} favorites={this.state.favorites}/>}/>
          <Route path="*" render={() => <ErrorView message="Page Not Found"/>} />
        </Switch>
      </main>
    );
  }
}

export default App;
