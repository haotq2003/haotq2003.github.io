import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from "../images/logo192.png";
import { useLocation,NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
const Header = (props) =>{
    const {logout,user} = useContext(UserContext);
    const [hideHeader,setHideHeader]=useState(false);
   
  

  const navigate = useNavigate();
  const handleLogout = () =>{
   logout();
    navigate("/");
    toast.success("Susscewsss")
  }
  const location = useLocation();
    return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
        <img src={logo}
        width="30"
         height="30"
         className='d-inline-block align-top'
         alt='React Bootstrap logo'
        />
        <span>FC Online</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         {location.pathname!=='/login' && (
          
            <>
            <NavLink to="/" className="nav-link">Home</NavLink>
          
          
          <NavLink to="/users"  className="nav-link" >Manage User</NavLink>
          </>
        )}
         </Nav>
          <Nav >
         {user && user.email &&  <span className='nav-link'>Welcome {user.email} </span>}
          <NavDropdown title="Setting" id="basic-nav-dropdown">
           {user && user.auth ===true ? <NavDropdown.Item onClick={() =>handleLogout()} >
              Logout
            </NavDropdown.Item> :  <NavLink to="/login" className="dropdown-item">Login</NavLink>}
           </NavDropdown>
        </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>)
}
export default Header;