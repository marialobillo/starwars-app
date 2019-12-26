import React from 'react';
import Character from './Character';


const ListCharacter = ({characters}) => (
    <div className="row">
        {characters.map(character => (
            <Character 
                key={character.name}
                character={character}
            />
        ))}
    </div>
);

export default ListCharacter;