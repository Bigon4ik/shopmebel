import React from 'react';
import {FaTrash} from 'react-icons/fa';

function Order(props:any) {

    return (

        <div className={"cartItem"} >
            <img src={'../img/'+ props.item.img} alt=""/>
            <h2>{props.item.title}</h2>
            <p>{props.item.price}$</p>
            <FaTrash onClick={()=>{props.deleteItemFromCart(props.item.id,props.item.price)}} className={'deleteItem'}/>
         </div>
    );
}

export default Order;
