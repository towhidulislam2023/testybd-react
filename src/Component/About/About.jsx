import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <h1 className='text-4xl text-center my-5 font-bold'>About Us</h1>
        <div className='w-[85%] mx-auto flex gap-10 my-5 items-center flex-col md:flex-row'>
            <img className='h-[500px] w-[500px]' src="https://img.freepik.com/free-vector/happy-chef-with-variety-utensils_23-2147634415.jpg?w=740&t=st=1680589351~exp=1680589951~hmac=4f0253b9404f142f097325a4042ebf8f9b2ace484b86c4680c7a653cc59613d0" alt="" />
            <div>
              <h1 className='text-3xl font-bold text-indigo-600 my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, quas.</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, amet beatae deleniti veritatis quia quibusdam recusandae, est aliquam enim eaque similique dolorem maxime laborum commodi illo. Reiciendis eaque illo harum.</p>
                    <Link to={"/food"}><button className="btn border-none hover:bg-indigo-500 btn-wide bg-indigo-600 my-4 font-bold text-md">Discover Food</button></Link>
            </div>
        </div>
        </>
    );
};

export default About;