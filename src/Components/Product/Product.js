/* eslint-disable no-unused-vars */
import React from 'react'
import './Product.css';
import { useStateValue } from '../../Reducers/StateProvider';

function Product({id, title, image, price, rating}) {
    const[{basket}, dispatch] = useStateValue();

    // console.log("This is the basket",basket);

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image:image,
                price: price,
                rating: rating
            },
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                {/* Title info */}
                <p>{title}</p>
                <p className="product__price">
                    {/* price */}
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
                 <div className="product__rating">
                    {/* Product rating */}
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                      <p>⭐</p>
                    ))}
                </div>  
            </div>
            {/* image */}
            <img src={image} alt=" "/>
            {/* Add to cart / see more */}
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
