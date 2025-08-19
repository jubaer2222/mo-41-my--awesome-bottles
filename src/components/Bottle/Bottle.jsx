import React from 'react';
import './Bottle.css'

const Bottle = ({bottle}) => {
    const {img,name,price,stock} = bottle;
    // console.log(bottle);
    return (
        <div className='card bottle'>
            <img src={img}></img>
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{stock} remaining</p>
        </div>
    );
};

export default Bottle;