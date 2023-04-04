import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DisplayFood from '../DisplayFood/DisplayFood';

const Food = () => {
    const foods=useLoaderData()
    const [massage, setMassage] = useState('')
    const handelInputFeildvalue = (e) => {
        setMassage(e.target.value);
    }
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className="form-control">
                    <div className="input-group my-5">
                        <input onChange={handelInputFeildvalue} type="text" placeholder="Search…" className="input input-bordered" />
                        <Link to={`/food/${massage}`}><button className="btn rounded-l-none  bg-indigo-600 hover:bg-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button></Link>
                    </div>
                </div>
            </div>
           
            <div className='grid md:grid-cols-3 md:gap-14 w-[85%] mx-auto my-10'>
                {
                    foods.meals.map(food => <DisplayFood key={food.idMeal} food={food}></DisplayFood>)
                }
            </div>
        </div>
    );
};

export default Food;