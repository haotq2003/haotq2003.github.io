import { Routes, Route,Link } from 'react-router-dom'
import Home from '../components/home';
import TableUser from '../components/TableUser'
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
const AppRoute = () =>{
return (
    <>
        <Routes>
      <Route path='/' element={<Home />} />
      
      <Route path='/login' element={<Login />}  />
      
      {/* <PrivateRoute path1="/users">
        <TableUser>

        </TableUser>
     </PrivateRoute> */}
     <Route path="/users"
        element={
            <PrivateRoute >
        <TableUser>

        </TableUser>
     </PrivateRoute>
        }
     />
     
     
      </Routes>
      
    </>
)
}
export default AppRoute;