import { ToastContainer, toast } from 'react-toastify';
import { useContext, useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import ModalAddnew from './components/ModelAddnew';

import Container from 'react-bootstrap/esm/Container';

import { Routes, Route,Link } from 'react-router-dom'

import { UserContext } from './context/UserContext';
import AppRoute from './routes/AppRoute';

function App() {
   const {user,loginContext} = useContext(UserContext);
   console.log("user",user)
   useEffect(()=>{
   if(localStorage.getItem("token")){
      loginContext(localStorage.getItem("email"),localStorage.getItem("token"))
   }
   },[])
  return(
   <>
   <div className='app-container'>
   <Header></Header>
   <Container>
   
    <AppRoute></AppRoute>
       </Container>
    </div>
   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
   </>
  );
}

export default App;
