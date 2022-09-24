import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';
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
            <Route path='/*' element={<ProtectedRoute/>}>
                <Route path='profile/' element={<Profile/>}/>
                <Route path='todo' element={<Todo/>}/>
                <Route path='todos' element={<Todos/>}/>
                <Route path='todo/:id' element={<TodoUpdate/>}/>
            </Route>
        </Routes>
    );
};

export default Router;