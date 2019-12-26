import React,{Component} from 'react';
import ListCharacter from './components/ListCharacter';

class App extends Component{
  state = {
    characters: [],
    items: 0,
    allItems: [],
  }

  componentDidMount(){
    this.getRequest();
    //console.log(this.state.allItems)
  }
    

  

  getRequest = async (page = 1) => {
    const url =`https://swapi.co/api/people/?page=${page}`;

    const request = await fetch(url);
    const people = await request.json();

    //const peopleCount = people.count;
    const results = people.results;
    console.log(results);

    this.setState({
      characters: results,
    });
  }

  handleChange = e => {
    
  }
  render(){
    return (
      <div className="container">
        <div className="">
          <input onChange={this.handleChange}/>
        </div>

        <ListCharacter characters={this.state.characters} />
      </div>
    );  
  }
}

export default App;
