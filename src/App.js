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
      postsPerPage: 10,
    }
  }

  componentDidMount() {
    for (let i = 1; i < 10; i++) {
      this.getRequest(i);
    }
    //this.getRequest();
    //this.setState({filteredCharacters: this.state.characters})
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
    console.log(pageNumber);
    this.setState({
      currentPage: pageNumber
    })
  }

  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.filteredCharacters.slice(indexOfFirstPost, indexOfLastPost);

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

        <ListCharacter characters={currentPosts} />

        <Pagination
          postsPerPage={this.state.postsPerPage}
          totalPosts={this.state.filteredCharacters.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

export default App;
