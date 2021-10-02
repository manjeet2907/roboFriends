import React from 'react';
import './cardlist.css'
import Card from '../Card/Card';

const Cardlist = (props) => {
    return (
        <div className='card_list'>
           {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
    ))}
        </div>
    )
}

export default Cardlist
