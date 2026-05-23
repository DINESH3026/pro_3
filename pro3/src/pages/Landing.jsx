import {Link} from "react-router-dom"
import './Landing.css'
import '../components/Navbar.css';
import logo from '../assets/image4.png'
import logo2 from '../assets/image.png'
const Landing=()=>{
    return(
        <div className="landingcontainer">
            <div className="topcontainerlanding" style={{position:"sticky",top:"0",width:"100%"}}>
                <div className="imgandtext">
                    <img className='logoimg' src={logo} width="25px" height="25px" />
                    <p className='projecttitle'>TaskFlow</p>
                </div>
                <div className="twobuttonlandingpage">
                    <button><Link to="/login">Sign in</Link></button>
                    <button className="okay"><Link to="/login">Get Started</Link></button>
                </div>
            </div>
            <div className="bottomcontainerlanding">
                <div className="loandtex">
                    <img src={logo2} width="25px" height="25px"/>
                    <p style={{color:'hsl(0, 0%, 90%)'}}>Smart reminders that actually work</p>
                </div>
                <div className="twotext">
                    <p style={{fontWeight:"bolder",fontSize:"60px",marginBottom:"20px"}}>The productivity platform <br/>built for <span style={{color:"hsl(239.57,95.92%,71.18%)"}}>classrooms</span>.</p>
                    <p style={{color:'hsl(0, 0%, 90%)'}}>Teachers assign work. Students stay on track. Real-time analytics and <br/>priority-aware reminders close the loop so no deadline slips through.</p>
                </div>
                <div className="twobuttonlandingpage">
                    <button className="okay" style={{padding:"10px"}}><Link to="/login">Open DashBoard</Link></button>
                </div>
                

            </div>
           
        </div>
    );
}
export default Landing;