import React, { Component } from 'react';
import Header from './components/Header';
import ListCharacter from './components/ListCharacter';
import Pagination from './components/Pagination';
import './bootstrap.min.css';

class App extends Component {
  state = {
    characters: [],
    selectedCharacters: [],
    currentPage: 1,
    charactersPerPage: 10,
    totalCharacters: 0,
    isLoading: true,
  }

  componentDidMount() {
    this.getRequest(this.state.currentPage);
  }

  getRequest = async (page) => {
    const url = `https://swapi.co/api/people/?page=${page}`;

    const request = await fetch(url);
    const people = await request.json();
    const results = people.results;

    for(const person of results){
      const homeworldRequest = await fetch(person.homeworld);
      const homeworldData = await homeworldRequest.json();

      const speciesRequest = await fetch(person.species);
      const speciesData = await speciesRequest.json();

      person.homeworld = homeworldData.name;
      person.species = speciesData.name;
    }

    this.setState({
      characters: results,
      selectedCharacters: results,
      totalCharacters: people.count,
      isLoading: false
    });
  }

  

  handleChange = event => {
    let updatedList = this.state.characters;

    updatedList = updatedList.filter((item) => {

      const lowercase = item.name.toLowerCase();
      const filter = event.target.value.toLowerCase();
      return lowercase.includes(filter);
    });

    this.setState({
      selectedCharacters: updatedList
    });
  }


  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    })
    this.getRequest(pageNumber);
  }
  
  render() {
    return (
      <div className="container">
        <Header title="Star Wars API Characters" />
        <div className="">
          <input
            onChange={this.handleChange}
            className="form-control form-control-lg" />
        </div>

        <ListCharacter 
          characters={this.state.selectedCharacters} 
          isLoading={this.state.isLoading}
        />

        <Pagination
          charactersPerPage={this.state.charactersPerPage}
          totalCharacters={this.state.totalCharacters}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

export default App;