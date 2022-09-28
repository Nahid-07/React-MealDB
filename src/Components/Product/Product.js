import React from 'react';

const Product = ({product,cart,setCart}) => {
    // console.log(product);
    const {strCategory,strMealThumb,strMeal,strInstructions,idMeal}=product;
    function addToCart(){
        const info = {
            strCategory,
            strMealThumb,
            strMeal,
            idMeal
        }
        
        
        if(cart){
            setCart([...cart,info])
        }
        else{
            setCart(info)
        }
    }
    // console.log(cart)
    return (
        <div className='border rounded-lg shadow-lg' data-aos='zoom-in-up'>
            <div className='p-2'>
                <img className='rounded-lg' src={strMealThumb} alt="" />
            </div>
            <div className='p-2'>
                <h2 className='bg-orange-500  text-white w-3/5 text-center rounded-lg px-1'>{strCategory}</h2>
                <h1>{strMeal}</h1>
                <p>{strInstructions.slice(0,200)}</p>
            </div>
            <button onClick={addToCart} className='bg-yellow-200 w-full py-2  rounded-lg'>Add to cart</button>
        </div>
    );
};

export default Product;