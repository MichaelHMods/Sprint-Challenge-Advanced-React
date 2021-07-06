import React from 'react';

import axios from 'axios';

//import component
import DataCard from './DataCard';
import NavBar from './NavBar';

class Data extends React.Component{
    state = {
        name: '',
        country: ' ',
        searches: '',
        player: [{}]
    }


//useEffect
componentDidMount() {
    axios
        .get('http://localhost:5000/api/players')
        .then(res => {
           
            this.setState({
                name: res.data.name,
                country: res.data.country,
                searches: res.data.searches,
                player:res.data
            });

        })
        .catch(err => console.log(err))
}; 

render(){

    return(
        
            <div className="soccer">
                <NavBar/>
                <div  >
                 <h1 data-testid="divtag" className="fancy-div">Soccer</h1>
                </div>
                {this.state.player.map((item, i) => <DataCard item={item} key={i}/>)}
           
        </div>
    )
}
};

export default Data;
