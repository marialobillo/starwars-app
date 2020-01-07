import React, {Component} from 'react';


class Character extends Component{
    constructor(props){
        super(props);
        this.state = {
            character: this.props.character,
        }
    }
    

    render(){
        const {
            name, 
            birth_year, 
            height, 
            mass,
            homeworld,
            species
        } = this.state.character;
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