import React from 'react';
import LatestSearchDetails from './latestSearchDetails';

const Recipe = ({ recipes }) => {
    return (

        <div style={{ position: 'relative', width: '90%', padding: '12px 50px' }}>
            <div class="row">
            <div style={{float: 'left', width: '60%'}}>
                {recipes && recipes.map((item, index) => {
                    return <div class="recipe-item" key={index}>
                        <div style={{ display: 'flex' }}>
                            <img src={item.recipe.image} alt='recipe_image' height='150px' width='150px' />

                            <div style={{ margin: '0px 2px 0px 10px' }}>
                                <h4><a href={item.recipe.shareAs} target='_blank' rel="noreferrer">{item.recipe.label}</a></h4>
                                <div style={{ display: 'flex' }}>
                                    Health:{item.recipe.healthLabels.map((item1, index1) => { return <div key={index1}>{` ${item1}, `}</div> })}
                                </div>
                                <div style={{ display: 'flex' }}>
                                    Diet: {item.recipe.dietLabels.map((item2, index2) => { return <div key={index2}>{` ${item2}, `}</div> })}
                                </div>
                                   Time: {item.recipe.totalTime}minutes
                                </div>
                        </div>
                    </div>
                })}
                </div>
                <div class="recipe-item" style={{float: 'right', width: '30%'}}>
                <LatestSearchDetails />
                </div>
            </div>
        </div>)
}


export default Recipe