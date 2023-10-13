import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import "./Nav.css"
import { useSelector } from 'react-redux';

const Navbar = () => {

    const cartData = useSelector(state => state.cart.cart)

    const navigate = useNavigate()

    return (
        <div className='nav-main'>
            <div className="brand-search">
                <div className="logo">
                    <h3 onClick={() => navigate("/")}>My/Store</h3>
                </div>
                <div className="search">
                    <div className="icons">
                        <GoSearch />
                    </div>
                    <input type="text" placeholder='Search for Products, Brands and More' />
                </div>
            </div>
            <div className="nav-item">
                <NavLink to='/' className="hoverBorder">Home</NavLink>
                {/* <NavLink to='/about' className="hoverBorder">About</NavLink> */}
                <NavLink to='/products' className="hoverBorder">Products</NavLink>
                <NavLink to='/contact' className="hoverBorder">Contact</NavLink>
                <NavLink to='/login' className="hoverBorder">Login</NavLink>
                <NavLink to='/cart' className='cart-link'>
                    <FiShoppingCart className='cart-trolley' />
                    <span className='cart-item'>{cartData.length}</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar