import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import ListCharacter from './components/ListCharacter';
import Pagination from './components/Pagination';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      filteredCharacters: [],
      currentPage: 1,
      charactersPerPage: 10,
    }
  }

  componentDidMount() {
    for (let i = 1; i < 10; i++) {
      this.getRequest(i);
    }
  }

  getRequest = async (page = 1) => {
    const url = `https://swapi.co/api/people/?page=${page}`;

    const request = await fetch(url);
    const people = await request.json();
    const results = people.results;

    const currentCharacters = [...this.state.characters];

    results.forEach(item => {
      if (!currentCharacters.includes(item.name)) {
        currentCharacters.push(item);

      }
    });

    this.setState({
      characters: currentCharacters,
      filteredCharacters: currentCharacters,
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
      filteredCharacters: updatedList
    });

  }
  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    })
  }

  render() {
    const indexOfLastCharacter = this.state.currentPage * this.state.charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - this.state.charactersPerPage;
    const currentCharacters = this.state.filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

    return (
      <div className="container">
        <Header title="Star Wars Characters" />
        <form>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search character"
            onChange={this.handleChange}
          />
        </form>

        <ListCharacter characters={currentCharacters} />

        <Pagination
          charactersPerPage={this.state.charactersPerPage}
          totalCharacters={this.state.filteredCharacters.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

export default App;
