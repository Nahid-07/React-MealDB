
import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import Swal from 'sweetalert2'

const Main = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] =useState([])
    // console.log(cart)
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(res => res.json())
        .then(data => setProducts(data.meals))
    },[])
    function deleteCart(id){
        const newCart = cart.filter(meal => meal.idMeal !== id)
        setCart(newCart);
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-12'>
            <div className="product-container col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 mt-10">
                {
                    products.map(product => <Product product={product} key={product.idMeal} cart={cart} setCart={setCart}></Product>)
                }
            </div>
            <div className="cart-container col-span-3 bg-neutral-200">
                <h1 className='text-center border py-4 shadow-xl mx-5'>this is cart contianer</h1>
                {
                    cart.map(meal => 
                        <div key={meal.idMeal} className='flex w-4/5 border bg-white shadow-lg rounded justify-between items-center p-2 mx-auto mt-5 box-border'>
                            <div className='mr-3'><img className='w-16' src={meal.strMealThumb} alt="" /></div>
                            <div><h1 className='text-lg font-semibold'>{meal.strMeal}</h1></div>
                            <div><p className='text-lg font-semibold'>{meal.strCategory}</p></div>
                            <button onClick={()=> deleteCart(meal.idMeal)} className='bg-slate-400 p-2 ml-3 text-white rounded-xl'>X</button>
                        </div>
                    )
                }
                
            </div>
        </div>
    );
};

export default Main;