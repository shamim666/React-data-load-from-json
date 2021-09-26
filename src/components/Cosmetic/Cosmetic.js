import React from 'react';
import { totalPrice } from '../../utilities/arrayReduce';
import { addDB , removeDB } from '../../utilities/localDB';

const Cosmetic = (props) => {
    const {id , name ,price} = props.cosmetic



    const handleAddDB = (id) => {
        addDB(id);
    }

    const handleRemoveDB = (id) => {
        removeDB(id);
    }



    return (
        <div>
            <h2>name:{name}</h2>
            <h2>{id}<small> price:{price}</small></h2>
            <h2>total Price using reducer is : {totalPrice}</h2>
            <button onClick = {()=>handleAddDB(id)}>Add to Cart</button>
            <button onClick = {()=>handleRemoveDB(id)}>Remove from Cart</button>
        </div>
    );
};

export default Cosmetic;