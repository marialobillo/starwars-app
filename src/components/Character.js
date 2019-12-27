import React, {Component} from 'react';


class Character extends Component{

    render(){
        const {
            name, 
            birth_year, 
            height, 
            mass, 
            homeworld, 
            species
        } = this.props.character;

        return (
        <tr className="">
            <td>{name}</td>
            <td>{birth_year}</td>
            <td>{height}</td>
            <td>{mass}</td>
            <td>{homeworld}</td>
            <td>{species}</td>
        </tr>
        );
    }
}


export default Character;