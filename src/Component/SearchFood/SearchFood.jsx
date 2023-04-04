import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DisplayFood from '../DisplayFood/DisplayFood';

const SearchFood = () => {
    const foods=useLoaderData()
    const navigate=useNavigate()
    const handelNavigate=()=>{
        navigate(-1)
    }
    // console.log(foods.meals);
    return (
        <div>
            {/* <h1>this is search food {foods.meals.length}</h1>  */}
            <button onClick={handelNavigate} className='mx-16 text-sm text-blue-600'>Go Back</button>
            <div className='grid md:grid-cols-3 gap-14 w-[85%] mx-auto'>
                {
                    foods.meals.map(food => <DisplayFood key={food.idMeal} food={food}></DisplayFood>)
                }
            </div>
          
        </div>
    );
};

export default SearchFood;