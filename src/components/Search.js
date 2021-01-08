import React, { useState, useEffect } from 'react';

const Search = ({ onFormSubmit }) => {
  const [inputs, setInputs] = useState({});
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    setDisabled(false)
  }, [inputs])

  const onSearch = (event) => {
    event.preventDefault()
    inputs.q = '';

    if ((inputs.cuisine === '' || inputs.cuisine === undefined) ||
      (inputs.health === '' || inputs.health === undefined)) {
      
      alert('Please fill the mandatory fields')

    }
    else {
      event.preventDefault()
      
      onFormSubmit(inputs)
      setInputs({})
      setDisabled(true)
    }
  }

  return (

    <div style={{ position: 'relative', width: '100%', padding: '12px 50px' }}>
      <form onSubmit={onSearch}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <label>Cuisine Type:</label><span style={{ color: 'red' }}>*</span>
            <input class="form-control" type="text" placeholder="e.g chinese" key="cuisine" name="cuisine"
              onChange={({ target }) => {
                setInputs(state => ({ ...state, cuisine: target.value }))
              }}
              value={inputs.cuisine} />
          </div>
          {/* <label>Meal Type:</label>
           <input class="form-control" type="text" placeholder="e.g lunch" key="meal" name="meal" onChange={({target}) => setInputs(state => ({...state,meal:target.value}))} value={inputs.meal}/>

           <label>Dish Type:</label>
           <input class="form-control" type="text" placeholder="e.g sandwich" key="dish" name="dish" onChange={({target}) => setInputs(state => ({...state,dish:target.value}))} value={inputs.dish}/>  */}
          <div>
            <label>Health:</label><span style={{ color: 'red' }}>*</span>
            <input class="form-control" type="text" placeholder="e.g peanut-free" key="health" name="health" onChange={({ target }) => setInputs(state => ({ ...state, health: target.value }))} value={inputs.health} />
          </div>
          <div>
            <label>Calories:</label>
            <input class="form-control" type="text" placeholder="e.g 100+ or 100-300 or 300" key="calories" name="calories" onChange={({ target }) => setInputs(state => ({ ...state, calories: target.value }))} value={inputs.calories} />
          </div>
          <div>
            <label>Time:</label>
            <input class="form-control" type="text" placeholder="Search" key="time" name="time" onChange={({ target }) => setInputs(state => ({ ...state, time: target.value }))} value={inputs.time} />
          </div>
          <div>
            <label>Diet:</label>
            <input class="form-control" type="text" placeholder="e.g balanced" key="diet" name="diet" onChange={({ target }) => setInputs(state => ({ ...state, diet: target.value }))} value={inputs.diet} />
          </div>
        </div>
        <button class={!disabled ? 'search-button-active' : 'search-button-inactive'} type='submit' disabled={disabled}>Search</button>
      </form>
    </div>
  )
}

export default Search