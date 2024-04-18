import React from 'react'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
// import Signup from './Pages/Singup';
import Signup from './Pages/Signup';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import ProctedRoute from './Components/ProctedRoute';

function App() {
  return (
    <>
    <AuthContextProvider><Navbar></Navbar>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     {/* <Route path='/profile' element={<Profile/>}/> */}

     <Route path='/profile' element={<ProctedRoute><Profile/></ProctedRoute>}/>
     <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </AuthContextProvider>
     
    
    </>
  )
}

export default App