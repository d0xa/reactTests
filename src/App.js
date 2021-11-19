import React from 'react';
import RecipeList from './RecipeList';
export const ThemeContext = React.createContext()

function App() {
  return(
    <>
    <RecipeList recipies={sampleRecipes}/>
    <h3> help me </h3>
    </>
  )
}
const sampleRecipes = [
  {
      id: 1,
      name: 'Plain Chicken',
      servings: 3,
      cookTime: '1:45',
      instructions:"1.Put Salt on Chicken\n 2. Yeet chicken into oven\n  3.Eat the chicken",
      ingridients:[
        {
          id:1,
          name:"Chicken",
          amount: '2 pounds'
        },
        {
          id:2,
          name:"salt",
          amount:'1 tbs'
        }
      ]
  },
  {
      id: 2,
      name: 'Plain Pork',
      servings: 5,
      cookTime: '0:45',
      instructions:"1.Put Paprika on Pork\n 2. Yeet pork into oven\n  3.Eat the pork",
      ingridients:[
        {
          id:1,
          name:"pork",
          amount: '3 pounds'
        },
        {
          id:2,
          name:"paprika",
          amount:'2 tbs'
        }
      ]
  },
]
export default App;
