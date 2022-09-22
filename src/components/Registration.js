import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Registration = () => {
    const navigate = useNavigate()
    const [data,setData] = useState({
        name:"",
        email:"",
        password:"",
        avator:''
    })
    const handleInput = (e) => {
        const input = { ...data };
        input[e.target.name] = e.target.value;
        setData(input);
        if(e.target.name === 'avator'){
            const input = { ...data };
            input[e.target.name] = e.target.files[0]
            setData(input);
        }
      };
    const registration = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('password', data.password)
        formData.append('avator', data.avator)
        axios.post('http://localhost:8080/user/registration',formData)
        .then(res=>{
            if(res.status ==='success'){
                navigate('/login')
            }
        })
        .catch(err=>console.log(err))
        console.log(formData)
    };
    console.log(data)
    return (
        <div className="registration">
            <form onSubmit={registration}>
                <h2>Account Registration</h2>
                <div></div>
                <input type="text" name="name" placeholder="enter name" className="input" required onChange={handleInput}/>
                <input type="email" name="email" placeholder="Enter email" className="input" required onChange={handleInput}/>
                <input type="password" name="password" placeholder="Enter password" className="input" required onChange={handleInput}/>
                <input type="file" name="avator" className="input" required onChange={handleInput}/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default Registration;