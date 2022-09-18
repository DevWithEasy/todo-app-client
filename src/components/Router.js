import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Todo from './Todo';
import Todos from './Todos';
import TodoUpdate from './TodoUpdate';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/todo' element={<Todo/>}/>
            <Route path='/todos' element={<Todos/>}/>
            <Route path='/todo/:id' element={<TodoUpdate/>}/>
        </Routes>
    );
};

export default Router;