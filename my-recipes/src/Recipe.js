import React, {Component} from 'react';
import './App.css';

class Recipe extends Component {
    render() {
        let recipe = this.props.getRecipe(this.props.id)

        const ingredientList = recipe.ingredients.map((ingredient) => {
            return <li>{ingredient.amount} {ingredient.title}</li>
        }, )
        const instructionsList = recipe.instructions.map((instruction) => {
            return <p className="instructions">{instruction}</p>
        }, )


        return (
            <div>
                <h2>{recipe.title}</h2>
                <p className="cookingTime">{recipe.cookingTime}</p>

                <div className="container">
                    <div className="item1">
                        <img src={recipe.image} alt={recipe.title}></img>
                    </div>
                    <div className="item1">
                        <h3>Ingredients</h3>
                        {ingredientList}
                    </div>
                </div>

                <h3>Instructions</h3>
                {instructionsList}

            </div>
        );
    }
}

export default Recipe
