import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../redux/actions/authAction';

const Login = () => {
    const user = useSelector(state=>state.auth.user)
    const dispatch = useDispatch()
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
        await fetch('http://localhost:8080/user/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>dispatch(loginAction(data.user)))
        .catch(err=>console.log(err))
        e.target.reset()
    };
    console.log(user)
    return (
        <div className="login">
            <form onSubmit={login}>
                <input type="email" name="email" placeholder="Enter email" className="input" required onChange={handleInput}/>
                <input type="password" name="password" placeholder="Enter password" className="input" required onChange={handleInput}/>
                <input type="submit" value="submit"/>
            </form>
            {
                user?.name && <div>
                    <p>{user.name}</p>
                    <img src={`http:localhost:8080/public/upload/${user.profileImage}`} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;