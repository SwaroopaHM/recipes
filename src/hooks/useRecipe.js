import { useState, useEffect } from 'react';
import recipe from '../apis/recipe';
import store from '../store';

const useRecipe = (defaultSearchTerm) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = (data) => {
    recipe.get('/search', {
      params: data
    }).then(response=>{
      store.dispatch({
        type: 'LATEST_DATA',
        payload: data
      })
  
      setRecipes({recipes: response.data.hits, searchData: data});
    }).catch(error=>{
      console.log(error)
    });
    };
  return [recipes, search];
};

export default useRecipe;