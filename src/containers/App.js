import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      pokemon: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then(response=> response.json())
      .then(users => this.setState({pokemon: users}));
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render(){
    const filteredPokemon = this.state.robots.filter(pokemon =>{
      return pokemon.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
    })
    if(!this.state.pokemon.length){
      return <h1>Loading</h1>
    }else{
      return(
        <div>
          <h1>Pokemon</h1>
          <SearchBox searchChange={this.OnSearchChange}/>
          <CardList pokemon={filteredPokemon}/>
        </div>
      );
    }

  }

  
}

export default App;