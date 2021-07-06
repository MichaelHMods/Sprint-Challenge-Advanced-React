import React from 'react';


function DataCard(props) {
    // console.log('this is props on the DataCard Page', props);
    return(
        <div className="main-card">
            <div className="inside-card">
                <h1>Player:{props.item.name} </h1>
                <h2>Country or Origin: {props.item.country} </h2>
                <h5>Times searched on Google: {props.item.searches} </h5>
            </div>
        </div>
    )
}
export default DataCard;