import React from 'react';

function Thing(props:any) {

    return (

        <div className={'item'}>
            <img src={'../img/'+ props.img}
                 onClick={()=> {props.onShowItem({
                     id:props.id,
                    title:props.title,
                    img:props.img,
                     desc:props.desc,
                    price:props.price})}}
            />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <b>{props.price} $</b>
            <div onClick={()=>props.addItemToCart({id:props.id,
                                                    title:props.title,
                                                    img:props.img,
                                                    price:props.price,})}
                 className={'addToCart'}>+</div>

        </div>


  );
}

export default Thing;
