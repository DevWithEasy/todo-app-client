import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/login' className='link'>Login</Link>
            <Link to='/registration' className='link'>Registration</Link>
            <Link to='/todo' className='link'>Todo Add</Link>
            <Link to='/todos' className='link'>All Todo</Link>
        </div>
    );
};

export default Nav;