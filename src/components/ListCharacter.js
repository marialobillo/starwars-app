import React,{Component} from 'react';
import Character from './Character';


class ListCharacter extends Component {
   
    render(){
        let characters = this.props.characters;
        return (
            <div className="">
                

                <div className="list">
                    {characters.map(character => (
                        <Character 
                            key={character.name}
                            character={character}
                        />
                    ))}
                </div>
            </div>    
        );
    }
}

export default ListCharacter;