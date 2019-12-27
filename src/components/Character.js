import React, {Component} from 'react';


class Character extends Component{
    constructor(props){
        super(props);
        this.state = {
            character: this.props.character,
            homeworld: '',
            species: '',
        }
    }
    componentDidMount(){
        this.getRequest('homeworld',this.state.character.homeworld);
        this.getRequest('species', this.state.character.species);
    }

    getRequest = async (field, url) => {
        
        const request = await fetch(url);
        const data = await request.json();

        this.setState({
            [field] : data.name,
        })
    }

    render(){
        const {
            name, 
            birth_year, 
            height, 
            mass
        } = this.state.character;
        return (
        <tr className="">
            <td>{name}</td>
            <td>{birth_year}</td>
            <td>{height}</td>
            <td>{mass}</td>
            <td>{this.state.homeworld}</td>
            <td>{this.state.species}</td>
        </tr>
        );
    }
}


export default Character;