import React from 'react'
// import Data from '../Context/ContextData'
import './NewArrival.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CurrencyFormat from './CurrencyFormat'

const NewArrival = () => {
    // const { isLoading, products } = useContext(Data)

    const { isLoading, products } = useSelector(state => state.products)

    const navigate = useNavigate()

    // const currencyFormatter = (price) => {
    //     return Intl.NumberFormat("en-IN", {
    //         style: 'currency',
    //         currency: "INR"
    //     }).format(price/100)
    // }

    return (
        <div className='arrival'>
            <div className="arrival-heading">
                <h3 data-text="New Arrivals.">New Arrivals.</h3>
            </div>
            <div className="arrival-wrapper">

                {isLoading ? <h1>Loading.....</h1> :
                    products && Array.from(products).sort(() => Math.random() - Math.random()).slice(0, 4).map(elem => {
                        return (
                            <div key={elem.id} className='arrivalProducts'>
                                <div className="arrival-image">
                                    <img src={elem.image} alt={elem.name} onClick={() => navigate(`/singleproduct/${elem.id}`)}/>
                                </div>
                                <span className='arrival-category'>{elem.category}</span>
                                <div>
                                    <p onClick={() => navigate(`/singleproduct/${elem.id}`)}>{elem.name.slice(0,15)}</p>
                                    <p>{<CurrencyFormat price={elem.price} />}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default NewArrival