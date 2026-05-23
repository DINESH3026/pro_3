import {Link} from "react-router-dom"
import AppLayout from "../components/AppLayout";
import './Login.css'
import logo from '../assets/image4.png'
import {useState} from 'react'
import tea from '../assets/school.png'
import stu from '../assets/student.png'
const Login=()=>{
    const [login,setlogin]=useState("teacher");
    const hello=()=>{
        setlogin("teacher")
    }
    const hi=()=>{
        setlogin("student")
    }
    return(
        <div className="wholecontainerlogin">
            <div className="logoandtextlogin">
                <img className='imglogin' src={logo} width="25px" height="25px" />
                <p>TaskFlow</p>
            </div>
            <div className="formlogin">
                <div className="textlogin">
                    <p style={{fontWeight:"bolder",fontSize:"30px",textAlign:"center"}}>Welcome Back</p>
                    <p>Sign in to continue to your dashboard</p>
                </div>
                <div className="twobuttonlogin">
                    <button style={{backgroundColor:login==="teacher"?"hsl(239.57,95.92%,71.18%)":""}} onClick={hello}><img src={tea} width="15px" height="15px" />Teacher</button>
                    <button style={{backgroundColor:login==="student"?"hsl(239.57,95.92%,71.18%)":""}} onClick={hi}> <img src={stu} width="15px" height="15px"/>Student</button>
                </div>
                <div className="inputlogin">
                    <p style={{marginBottom:"10px",fontSize:"13px"}}>Email</p>
                    <input placeholder="24___.__@rmkec.ac.in" />
                    <p style={{marginBottom:"10px",fontSize:"13px"}}>Password</p>
                    <input placeholder="*******" type="password" />
                </div>
                <div className="signinasteacherorstudent">
                    <button>{login==="teacher"?<Link to="/teacher">Sign in as Teacher </Link>:<Link to="/student">Sign in as Student</Link>}</button>
                </div>
            </div>
        </div>
        
           
        
        
    );
}
export default Login;