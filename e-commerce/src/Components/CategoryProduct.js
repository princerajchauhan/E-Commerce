import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Fetures/GetDataSlice'
import { useParams } from 'react-router-dom'
import CurrencyFormat from './CurrencyFormat'

const CategoryProduct = () =>{
    const { isLoading, products } = useSelector(state => state.products)

    const cat = useParams().category

    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getData())
    },[])
    return(
        <div className='categoryproduct-main' style={{display:'flex', flexWrap:'wrap', gap:'20px', justifyContent:'center', marginTop: '50px'}}>
            {
                isLoading?<h2>Loading....</h2>:
                products.filter(ele => ele.category === cat).map(ele =>{
                    return <div>
                                <img src={ele.image} alt="" style={{width: '20vw'}}/>
                                <h5>{ele.name}</h5>
                                <h6>{<CurrencyFormat price={ele.price} />}</h6>
                        </div>
                })
            }
        </div>
    )
}

export default CategoryProduct