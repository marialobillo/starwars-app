import React from 'react';

const Character = ({character}) => {

    const {name, birth_year, height, mass, homeworld, species} = character;
   
    return(
        <div className="">
            <p>Name: {name}</p>
            <p>Birth Year: {birth_year}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <hr/>
        </div>
    );
}


export default Character;