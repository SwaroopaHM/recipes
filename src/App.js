import './App.css';
import React from 'react';


import Search from './components/Search';
import useRecipe from './hooks/useRecipe';
import RecipeList from './components/Recipe';
const App =()=> {

  const [allData, search] = useRecipe('chicken');

  return (
    <div className="App">
      <Search onFormSubmit={search} />
      <RecipeList recipes={allData.recipes} />
    </div>
  );
}

export default App;
