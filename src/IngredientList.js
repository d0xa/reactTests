import React from 'react';
import Ingredient from './Ingredient'

export default function IngredientList({ingridients}) {
    const ingridientElements = ingridients.map(ingridients =>{
        return <Ingredient 
        key={ingridients.id} 
        {...ingridients}/>
    })
    return (
        <div>
            {ingridientElements}
        </div>
    )
}
