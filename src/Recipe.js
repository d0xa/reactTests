import React from 'react';
//import Ingredient from './Ingredient';
import IngredientList from './IngredientList';
export default function Recipe(props) {
    const{
        name,
        cookTime,servings,
        instructions,
        ingridients
    } = props;
    return (
        <div>
            <div>
                <h3>{name}</h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>
                <span>Cook Time: </span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Servings: </span>
                <span>{servings}</span>
            </div>
            <div>
                <span>Instructions:</span>
                <div>
                   {instructions}
                </div>
            </div>
            <div>
                <span>Ingredients:</span>
                <div>
                  <IngredientList ingridients= {ingridients} />
                </div>
            </div>
        </div>
    )
}
