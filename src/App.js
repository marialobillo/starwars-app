import React,{Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import ListCharacter from './components/ListCharacter';

class App extends Component{
  constructor(){
    super();
    this.state = {
      characters: [],
      filteredCharacters: [],
    }
  }
  
  componentDidMount(){
    for(let i = 1; i < 10; i++){
      this.getRequest(i);
    }
    //this.getRequest();
    //this.setState({filteredCharacters: this.state.characters})
  }
    
  getRequest = async (page = 1) => {
    const url =`https://swapi.co/api/people/?page=${page}`;

    const request = await fetch(url);
    const people = await request.json();
    const results = people.results;
    
    const currentCharacters = [...this.state.characters];
    console.log(page, results.length);
    
    results.forEach(item => {
      if(!currentCharacters.includes(item.name)){
        currentCharacters.push(item);

      }
    });
  
    console.log(currentCharacters);
  
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

  render(){
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
        
        <ListCharacter characters={this.state.filteredCharacters} />
      </div>
    );  
  }
}

export default App;
