import React from 'react';
import { addToDb, removeFromDb } from '../../Utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;

    const addToCart = (id) => {
        // console.log('item added', id);
        // localStorage.setItem(id, 1);
        addToDb(id);

    }

    const removeFromCart = (id) => {
        removeFromDb(id);
    }

    const addTOCartWithParam = () => addToCart(id);

    return (
        <div className='product'>
            <h2>Buy  this: {name}</h2>
            <p>Only fot: ${price}</p>
            <p><small>It has id: {id}</small></p>
            {/* <button onClick={addTOCartWithParam}>Add to cart</button> */}
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;