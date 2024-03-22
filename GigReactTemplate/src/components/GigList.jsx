import React, { useState } from "react";
import GigItem from './Gig.jsx'


const GigList = () => {
    const [bands, setBands] = useState(
        {name: 'Lana', image:{Lana}, description:'A gig', timedate:'21/03', location: 'The Moon'},
        {name: 'Lana', image:{Lana}, description:'A gig', timedate:'21/03', location: 'The Moon'},
        {name: 'Lana', image:{Lana}, description:'A gig', timedate:'21/03', location: 'The Moon'}
    );


    return (
        <div className="GigListItems" >
            {bands.map ((band) => (
            <GigItem band={band} key={band.name}/>
            ))}
            <div className="Favourite">
                <p>Favourite</p>
            </div>
        </div>
    )
    
}

export default GigList








// /* <div id="Gig"class='container'>
// <h3 id="band" data-testid="band">{props.name}</h3>
// <img width='500px' src={props.image} alt="BandImage"/>
// <p className="description" data-testid="description">{props.description}</p>
// <p className="t-a-d" data-testid="timedate">{props.timedate}</p>
// <p className="location" data-testid="location">{props.location}</p>
// <Favourite/> <Counter/>
// </div>/*