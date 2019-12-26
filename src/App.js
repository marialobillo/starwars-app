import React,{Component} from 'react';
import ListCharacter from './components/ListCharacter';

class App extends Component{
  state = {
    characters: []
  }

  componentDidMount(){
    this.getRequest();
  }

  getRequest = async (page = 1) => {
    const url =`https://swapi.co/api/people/?page=${page}`;

    const request = await fetch(url);
    const people = await request.json();

    const results = people.results;
    console.log(results);

    this.setState({
      characters: results
    })
  }
  render(){
    return (
      <div className="container">
        <ListCharacter characters={this.state.characters} />
      </div>
    );  
  }
}

export default App;
