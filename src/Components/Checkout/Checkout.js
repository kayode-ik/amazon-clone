/* eslint-disable no-unused-vars */
import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../Reducers/StateProvider'
import Subtotal from './Subtotal/Subtotal'

function Checkout() {

    const [{basket , user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img
                    className="checkout_ad"
                    src="https://th.bing.com/th/id/R09c097211d4d5acc508a35756f5a12ec?rik=9jAzaQh8efgtjw&riu=http%3a%2f%2fwbbands.info%2fwp-content%2fuploads%2f2014%2f09%2famazon-smile-banner.jpg&ehk=vwHBwSdNayH9EAMAtn1o3XVcm8L%2fAK7nfq2jtKhrBV0%3d&risl=&pid=ImgRaw"
                    alt=""
                />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
            </h2>
            {/* CheckoutProduct */}
            {basket.map(item => (
                <CheckoutProduct
                id = {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}

                />
            ))}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
                <h2>The SubTotal will go here</h2>
            </div>



        </div>
    )
}

export default Checkout
