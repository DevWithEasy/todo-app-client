import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginAction } from '../redux/actions/authAction';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data,setData] = useState({
        email:"",
        password:""
    });
    const handleInput = (e) => {
        const input = { ...data };
        input[e.target.name] = e.target.value;
        setData(input);
      };

    const login = async (e) => {
        e.preventDefault();
        await fetch('https://todo-bangla.herokuapp.com/user/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.user){
                navigate('/')
                dispatch(loginAction(data.user))
                localStorage.setItem('user', JSON.stringify(data.user))
            }
        })
        .catch(err=>console.log(err))
        e.target.reset()
    };

    return (
        <div className="login">
            <form onSubmit={login}>
                <h2>Account Login</h2>
                <div></div>
                <input type="email" name="email" placeholder="Enter email" className="input" required onChange={handleInput}/>
                <input type="password" name="password" placeholder="Enter password" className="input" required onChange={handleInput}/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default Login;