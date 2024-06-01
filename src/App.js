import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import ModalAddnew from './components/ModelAddnew';
import TableUser from './components/TableUser';
import Container from 'react-bootstrap/esm/Container';
import Home from './components/home';
import { Routes, Route,Link } from 'react-router-dom'
import Login from './components/Login';

function App() {
   
  return(
   <>
   <div className='app-container'>
   <Header></Header>
   <Container>
   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<TableUser />} />
      <Route path='/login' element={<Login />}
       />
      </Routes>
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
