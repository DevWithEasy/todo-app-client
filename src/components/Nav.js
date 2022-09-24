import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction } from '../redux/actions/authAction';
import {BsMastodon} from 'react-icons/bs'

const Nav = () => {
    const user = useSelector(state=>state.auth.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const url =(url)=>{
        navigate(url)
    }
    const logOut =()=>{
        dispatch(logoutAction())
        localStorage.removeItem('user')
        navigate('/')
    }
    return (
        <div className='navbar'>
            <div className="navbar_logo">
                <span>
                    <BsMastodon className='icon' size={40}/>
                    <span><Link to='/'>TODO</Link></span>
                </span>
            </div>
            <div className="navbar_link">
                {!user.name && <button onClick={()=>url('/login')} className='link'>Login</button>}
                {!user.name && <button onClick={()=>url('/registration')} className='link_registration'>Start for free
                </button>}
                {user.name && <button onClick={()=>url(`/profile`)} className='link'>Profile</button>}
                {user.name && <button onClick={()=>url('/todo')} className='link'>Add Todo</button>}
                {user.name &&  <button onClick={()=>url('/todos')} className='link'>All Todos</button>}
                {user.name && <button onClick={()=>logOut()} className='link_registration'>Logout</button>}
            </div>
        </div>
    );
};

export default Nav;