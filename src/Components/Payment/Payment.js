/* eslint-disable no-unused-vars */
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import axios from '../../Reducers/axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from '../../Components/Checkout/CheckoutProduct/CheckoutProduct';
import './Payment.css';
import { getBasketTotal } from '../../Reducers/reducer';
import { useStateValue } from '../../Reducers/StateProvider';
import { db } from "../../utils/firebase";

function Payment() { 

    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState();
    const [succeeded, setSucceeded] = useState();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setclientSecret] = useState(true);


    useEffect(() => {
//generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expires the total in a currencies subunit
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setclientSecret(response.data.clientSecret )
        }

        getClientSecret();
    }, [basket])


    const handleSubmit = async (event) => {
        // do all the fancy stripe
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) =>{
            //paymentIntent = payment confirmation

            db
            .collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
    }

    const handleChange = (event) => {
        //Listen for changes in the CardElement
        //and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : " ");

    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h1>
                {/* Payment Section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>

                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 Yaba way</p>
                        <p>Lagos, Nigeria</p>
                    </div>
                </div>

                {/* Payment Section - review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>


                {/* Payment Section - Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe payments */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                        <h3>Order Total : {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error &&<div>{error}</div>}
                        </form>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Payment
