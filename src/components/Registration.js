import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const Registration = () => {
    const navigate = useNavigate()
    const [data,setData] = useState({
        name:"",
        email:"",
        password:"",
        avator:''
    })
    const [msg,setMsg] = useState(false)
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
      const notify=()=>{
        toast.success('User registration successfull', {
            position: toast.POSITION.TOP_CENTER
          });
    };
    const registration = async (e) => {
        e.preventDefault();
        setMsg(true)

        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('password', data.password)
        formData.append('avator', data.avator)
        axios.post('https://todo-bangla.herokuapp.com/user/registration',formData)
        .then(res=>{
            setMsg(false)
            if(res.status ==='success'){
                notify()
                navigate('/login')
            }

        })
        .catch(err=>console.log(err))
    };
    
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
            {msg && <div className="flex justify-center items-center py-4">
                <div className="">
                    <p className='text-center animate-pulse font-bold font-mono'>Please wait...</p>
                    <p className='text-center'>Trying to create user</p>
                </div>
            </div>}
        </div>
    );
};

export default Registration;