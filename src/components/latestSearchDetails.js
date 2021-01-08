import React from 'react';
import { connect } from 'react-redux';

const LatestSearchDetails =(props)=>{
    const finalArray = props.LatestSearchData.slice(props.LatestSearchData.length-6, props.LatestSearchData.length-1)
    
return(
<div>
    <h3>5 recent search data</h3>
    {finalArray.map((item, index)=>{
       return <ul>
    {item.hasOwnProperty('cuisine') && 
    <li key={index}>
<ul>
<li>cuisine: {item.cuisine}</li>
<li>Health: {item.health}</li>
<li>Calories: {item.calories}</li>
<li>Time: {item.time}</li>
<li>Diet: {item.diet}</li>
</ul>

    </li>
    }
        </ul>
    })}
</div>
)
}

const mapStateToProps=(state)=>{
    return({
        LatestSearchData: state.latestSearch
    })
}

export default connect(mapStateToProps)(LatestSearchDetails)