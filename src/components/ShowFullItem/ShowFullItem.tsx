import React, {useState} from 'react';
import {FaTrash} from 'react-icons/fa';

function ShowFullItem(props:any) {

    return (

        <div className={"full-item"} >
            <div className={"full-item-div"}>
            <img src={'../img/'+ props.fullItem.img} onClick={()=>{props.setShowFullItem(false)}}/>
            <h2>{props.fullItem.title}</h2>
            <p>{props.fullItem.desc}</p>
            <b>{props.fullItem.price} $</b>
            <div onClick={()=>props.addItemToCart({id:props.fullItem.id,
                title:props.fullItem.title,
                img:props.fullItem.img,
                price:props.fullItem.price,})}
                 className={'addToCart'}>+</div>
            </div>
        </div>


    );
}

export default ShowFullItem;
