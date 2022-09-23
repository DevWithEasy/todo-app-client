import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Todo = () => {
    const user =useSelector(state=>state.auth.user)
    const [data,setData] = useState({
        user:user.id,
        title:"",
        details:"",
        status:""
    });
    const [todoMsg,setTodoMsg] = useState({})
    const handleInput = (e) => {
        const input = { ...data };
        input[e.target.name] = e.target.value;
        setData(input);
      };

    const todo = async (e) => {
        e.preventDefault();
        await fetch('https://todo-bangla.herokuapp.com/todo',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>setTodoMsg(data))
        .catch(err=>console.log(err))
        e.target.reset()
    };
    
    return (
        <div className="todo">
            {
                todoMsg.status ? <div className={todoMsg.status === 'Success' ? 'border boder-green-500 p-2 text-green-500' : 'border boder-red-500 p-2 text-red-500'}>{todoMsg.status} ! {todoMsg.msg}</div>:''
            }
            <form onSubmit={todo}>
                <input type="text" name="title" placeholder="Enter Title" className="input" required onChange={handleInput}/>
                <textarea type="text" name="details" placeholder="Enter Details here" className="input" required onChange={handleInput}/>
                <select name='status' className="input" required onChange={handleInput}>
                    <option value="">Select Status</option>
                    <option value="Running">Running</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
                <input type="submit" value="Update"/>
            </form>
        </div>
    );
};

export default Todo;