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
  }

  componentDidMount() {
    this.getRequest(this.state.currentPage);
  }

  

  
  getRequest = async (page) => {
    const url = `https://swapi.co/api/people/?page=${page}`;

    const request = await fetch(url);
    const people = await request.json();
    const results = people.results;

    this.setState({
      characters: results,
      selectedCharacters: results,
      totalCharacters: people.count,
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

        <ListCharacter characters={this.state.selectedCharacters} />

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