import React from 'react';

const DisplayFood = ({food}) => {
    console.log(food);
    const { strMeal, strMealThumb, strArea, strCategory, strInstructions, strYoutube, strSource} = food
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl my-10">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>{strInstructions.slice(0,200)}...</p>
                    <h3 className='text-md font-bold'>Area: {strArea}</h3>
                    <h3 className='text-lg font-bold'>Category: {strCategory}</h3>
                    <a className='text-blue-700 underline' href={strSource} target='blank' > See more</a>
                    <div className="card-actions justify-end">
                        <a href={strYoutube} target='blank'> <button className="btn px-12 bg-red-600 hover:bg-red-500 border-none">Youtube</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayFood;