import React, { useState } from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';


const Home = () => {
    const [massage,setMassage]=useState('chi')
    const handelInputFeildvalue=(e)=>{
        setMassage(e.target.value);
    }
    return (
        <div className='set-bg flex justify-center items-center flex-col h-screen'>
            <div className='md:w-[40%] flex flex-col items-center justify-center'>
                <h1 className='text-3xl text-white font-bold font-mono text-center'>
                    “So long as you have food in your mouth you have solved all questions for the time being.”
                </h1>
                <div className="form-control">
                    <div className="input-group my-5">
                        <input onChange={handelInputFeildvalue} type="text" placeholder="Search…" className="input input-bordered" />
                        <Link to={`/food/${massage}`}><button className="btn btn-square bg-indigo-600 hover:bg-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button></Link>   
                    </div>
                </div>
                <Link to={"/food"}><button className="btn hover:bg-indigo-500 btn-wide bg-indigo-600 my-4 font-bold text-md">Discover Food</button></Link>
            </div>



        </div>
    );
};

export default Home;