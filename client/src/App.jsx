import React, { Suspense } from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Groups from './pages/Groups';
import Register from './pages/Register';

function App() {
 return (
    
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/groups' element={<Groups />} />
          <Route path='/chat/:chatId' element={<Chat />} />
        </Routes>
      </Suspense>
   
 );
}

export default App;