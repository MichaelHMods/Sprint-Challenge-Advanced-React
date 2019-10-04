import React from 'react';

import axios from 'axios';

//import component
import DataCard from './DataCard';

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
            console.log('this is res', res)
            console.log('this is this.state.player', res.data.name)
            this.setState({
                name: res.data.name,
                country: res.data.country,
                searches: res.data.searches,
                player:res.data
            });

        },[])
        .catch(err => console.log('This is your error, change your life decisions', err))
}

render()     {
    return(
        <div className="page-container">
            {/* <DataCard name={this.state.name} country={this.state.country} searches={this.state.searches}/> */}
          
                {this.state.player.map((item, i) => <DataCard item={item} key={i}/>)}
           
        </div>
    )
}
};

export default Data;
