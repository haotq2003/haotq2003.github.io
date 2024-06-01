import { Routes, Route,Link } from 'react-router-dom'
import TableUser from '../components/TableUser';
import { UserContext } from '../context/UserContext';
import { useContext, useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const PrivateRoute = (props)  =>{
    const {loginContext,user} = useContext(UserContext);    
    const [show, setShow] = useState(true);
    if(user && !user.auth){
       return <>
       
        <Alert variant="danger"  className='mt-3'>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
        Khong the vo,Ban phai dang nhap
        </p>
      </Alert>
       </>
    }



    return(
    <>
    {props.children}
     </>
)
}
export default PrivateRoute;