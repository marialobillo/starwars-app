import React,{Component} from 'react';
import Character from './Character';


class ListCharacter extends Component {
   
    render(){
        let characters = this.props.characters;
        return (            
            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birth Year</th>
                            <th>Height</th>
                            <th>Mass</th>
                            <th>Homeworld</th>
                            <th>Species</th>
                        </tr>
                    </thead>
                    <tbody>
                    {characters.map(character => (
                        <Character 
                            key={character.name}
                            character={character}
                        />
                    ))}
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default ListCharacter;