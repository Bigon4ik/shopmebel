import React, {useState} from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import Order from '../Order/Order';

function Header(props:any) {
    const [cartOpen,setCartOpen] = useState(false)
    
    return (
        <header>
            <div >
                <span className={'logo'}>House staff</span>
                <ul className={'nav'}>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Profile</li>
                </ul>
                <FaShoppingCart
                    onClick={()=>setCartOpen(!cartOpen)}
                    className={`shop-cart-button ${cartOpen && 'active'}`}/>
                {cartOpen && (
                    <div className={'shop-cart'}>
                        {props.cartItem.length>0 ?
                            <>
                                {props.cartItem.map((el:any)=>(
                                    <Order key={el.index}
                                           item={el}
                                           deleteItemFromCart={props.deleteItemFromCart}
                                    />
                                ))}
                                <p className={'summa'}>Total price:{props.cartSumma}$</p>
                            </>
                         : <h2 className={'cartEmpty'}>Cart empty</h2>}



                    </div>
                )}
                <div className={"presentation"}>
            </div>
         </div>
        </header>

    );
}

export default Header;
