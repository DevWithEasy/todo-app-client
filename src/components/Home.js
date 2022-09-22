import React from 'react';
import { Link } from 'react-router-dom';
import service from '../data/service';

const Home = () => {
    return (
        <div className='home'>
            <div className="space-y-2 text-center">
                <p className='text-3xl font-bold'>
                    Organize yourwork and life, finally.
                </p>
                <p className=''>
                    Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.
                </p>
                <Link to='/registration' className='block w-40 mx-auto p-2 border border-red-400 rounded bg-red-400 hover:bg-red-500 text-white transition-all duration-300 mt-5'>Start for free</Link>
            </div>
            <div className="grid grid-cols-2 py-10 w-10/12 mx-auto">
                {
                    service.map(i=><div key={i.id} className='space-y-2 p-2'>
                        <img src={i.image} alt=""  className='w-20 h-20'/>
                        <p className='font-bold'>{i.title}</p>
                        <p className='text-gray-600'>{i.desc}</p>
                        <p className='text-blue-500'>{i.link}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;