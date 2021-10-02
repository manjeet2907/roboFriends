import React from 'react';
import './card.css';

const Card = (props) => {
    return (
        <div className='card'>
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monsterlogo" />
            <h3>{props.monster.name}</h3> 
            <h5>{props.monster.email}</h5>
        </div>
    )
}

export default Card