/* eslint-disable no-unused-vars */
import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../../../Reducers/StateProvider';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {

    const [{basket }, dispatch] = useStateValue();


    const removeFromBasket = () => {
        //remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}  alt=""
            />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {/* Product rating */}
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                      <p>⭐</p>
                    ))}
                </div>  
                {!hideButton && (
                <button onClick={removeFromBasket}>Remove from Cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
