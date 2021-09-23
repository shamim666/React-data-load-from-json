import React from 'react';
import { totalPrice } from '../../utilities/habijabi';
import { addDB } from '../../utilities/localDB';

const Cosmetic = (props) => {
    const {id , name ,price} = props.cosmetic



    const handlePurchase = (id) => {
        addDB(id);
    }
    return (
        <div>
            <h2>name:{name}</h2>
            <h2>{id}<small> price:{price}</small></h2>
            <button onClick = {()=>handlePurchase(id)}>Purchase</button>
        </div>
    );
};

export default Cosmetic;