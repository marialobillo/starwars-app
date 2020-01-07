import React from 'react';
import Character from './Character';


const ListCharacter = ({characters, isLoading}) => (
    <div className="row">
        <table className="table">
            <thead className="thead-dark">
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
        {isLoading 
        ? <tr>
            <td coldspan="6">Loading...</td>
            </tr>
        :characters.map(character => (
            <Character 
                key={character.name}
                character={character}
            />
        ))}
            </tbody>
        </table>
    </div>
);

export default ListCharacter;