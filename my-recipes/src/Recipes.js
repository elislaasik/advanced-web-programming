import React, {Component} from 'react';
import './App.css'
import Recipe from './Recipe'
import {Router, Link} from '@reach/router'

class Recipes extends Component {
    render() {

        const filter = this.props.filter


        const content = elm =>
                <li key={elm.id}>
                    <Link to={"/recipe/"+elm.id}>{elm.title}</Link>
                </li>


        let recipes = this.props.data
        if(filter){
            recipes = recipes.filter(recipe => recipe.ingredients.title.includes(filter))
        }
        let list = recipes.map(content)


        return (
            <div>
                <ul>
                {list}
                </ul>
            </div>
        );
    }
}

export default Recipes
