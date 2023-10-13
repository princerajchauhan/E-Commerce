import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CurrencyFormat from '../Components/CurrencyFormat'
import './cart.css'
import { addToCart, removeFromCart } from '../Fetures/CartSlice'
import { FaPlus, FaMinus } from "react-icons/fa"

const Cart = () => {

    const cartData = useSelector(state => state.cart)

    const dispatch = useDispatch()

    return (<>
        {cartData.cart.length <= 0 ?
            <div className='cart-empty'>
                <h2> Your Cart is empty !! </h2>
                <div className="empty-cart-image">
                    <img src="./emptyCart.png" alt="" />
                </div>
            </div> :
            <div className="cart-main">
                <div className="cart-products">
                    {cartData.cart.map((elem, index) => {
                        return (
                            <div className='cart-wrapper' key={index}>
                                <div className="cart-details">
                                    <div className="cart-image">
                                        <img src={elem.image} alt="" />
                                    </div>
                                    <div className="cart-info">
                                        <h5>{elem.name}</h5>
                                        <p>{<CurrencyFormat price={elem.price} />}</p>
                                    </div>
                                </div>
                                <div className="cart-quantity">
                                    <button onClick={() => dispatch(removeFromCart({ id: elem.id, price: elem.price }))}><FaMinus /></button>
                                    <span>{elem.quantity}</span>
                                    <button onClick={() => dispatch(addToCart({ id: elem.id, price: elem.price }))}><FaPlus /></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="price-details">
                    <p>PRICE DETAILS</p>
                    <div className="item-detail">
                        <div>
                            <p>Subtotal ({cartData.subTotal} item's)</p>
                            <p>{<CurrencyFormat price={cartData.totalAmount} />}</p>
                        </div>
                        <div>
                            <p>Discount</p>
                            <p>{<CurrencyFormat price={35400 * cartData.subTotal} />}</p>
                        </div>
                        <div>
                            <p>Delivery Charges</p>
                            <p><del>₹200</del><span style={{ color: 'green', fontWeight: 600 }}> Free</span></p>
                        </div>
                    </div>
                    <div className='total-amount'>
                        <h5>Total Amount</h5>
                        <h6>{<CurrencyFormat price={cartData.totalAmount - 20000} />}</h6>
                    </div>
                </div>
            </div>
        }
    </>
    )
}

export default Cart