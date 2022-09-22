import React, {useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { logoutAction } from '../redux/actions/authAction';

const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const [user,setUser] = useState({})
    const [errMsg,setErrMsg] = useState('')
    useEffect(()=>{
       const getUser =async()=>{
         await fetch(`http://localhost:8080/user/profile/${id}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.status === 'failed'){
                    setErrMsg(data.message)
                }else{
                    // setUser(data.user)
                    setUser(data.data)
                }
            })
            .catch(err=>setErrMsg('Please ensure connection is established'))
        }
        getUser()
    },[id])
    const deleteAccount =()=>{
        fetch(`http://localhost:8080/user/profile/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.status==='success'){
                navigate('/')
                dispatch(logoutAction())
            }
        })
        .catch(err=>console.log(err));
    }
    return (
        <div className='text-center my-10 w-4/12 mx-auto shadow-md p-4 space-y-2 rounded'>
            {errMsg && <p>{errMsg}</p>}
            <img src={`http://localhost:8080/upload/${user?.profileImage}`} alt="" className='w-32 h-32 mx-auto rounded-full'/>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Total Todos: {user?.todos?.length}</p>
            <button onClick={()=>deleteAccount()}>Delete Account</button>
        </div>
    );
};

export default Profile;