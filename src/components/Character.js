import React from 'react';

const Character = ({character}) => {

    const {name, birth_year, homeworld, species, films, url} = character;

    return(
        <div className="">
            <p>{name}</p>
        </div>
    );
}


export default Character;