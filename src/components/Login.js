import { set } from "lodash";
import { useContext, useEffect, useState } from "react"
import { loginApi } from "../service/UserService";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () =>{
    const {loginContext} = useContext(UserContext);
    let navigate = useNavigate();
    const {logout} = useContext(UserContext);
    const[email,setEmail]=useState("");
    const[password,setPassword] = useState("");
    const[showPass,setShowPass] = useState(false);
    const handleBack = () =>{
        navigate("/")
    }
    // useEffect (() => {
    //     let token = localStorage.getItem("token");
    //     if(token){
    //         navigate("/");
    //     }
    // },[])
    const handleLogin = async ()=>{
        if(!email || !password){
            toast.error("Email/Password is required!");
            return;
        }
        let res = await loginApi(email,password);
        if(res && res.token){
            loginContext(email,res.token)
            navigate("/");
            
            toast.success("Login thanh cong")
            
        }else{
            if(res && res.status ===400){
                toast.error(res.data.error)
            }
        }
        
    }
 return (
    <>
        <div className="login-container col-12 col-sm-4">
        <div className="title">
           Login
        </div>
        <div className="text">Email or password  .eve.holt@reqres.in</div>
        
        <input type="text" placeholder="Email or username"
        value={email} onChange={(event)=>setEmail(event.target.value)}></input>
        <div className="input-2">
        <input type={showPass===true ? "text" : "password"} placeholder="Password"
        value={password} onChange={(event)=>setPassword(event.target.value)}
        ></input>
        <i className={showPass === true ? "fa-solid fa-eye":"fa-solid fa-eye-slash"} 
        onClick={() => setShowPass(!showPass)}>
            
        </i>
        </div>
        <button className={email && password ? "active" : ""}
        onClick={() => handleLogin()}
        >
        <i className="fas fa-sync fa-spin"></i>Login</button>
        <div className="back">
        <i className="fa-solid fa-arrow-left"></i>  
        <span onClick={() => handleBack ()}>Go back</span>
        </div>
        </div>
    </>
 )
}
export default Login