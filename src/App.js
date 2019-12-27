import React,{Component} from 'react';
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
    this.getRequest();
    //this.setState({filteredCharacters: this.state.characters})
  }
    
  getRequest = async (page = 1) => {
    const url =`https://swapi.co/api/people/?page=${page}`;

    const request = await fetch(url);
    const people = await request.json();
    const results = people.results;

    this.setState({
      characters: results,
      filteredCharacters: results,
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
