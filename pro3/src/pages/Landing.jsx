import {Link} from "react-router-dom"
import './Landing.css'
import '../components/Navbar.css';
import logo from '../assets/logoimage.webp'
const Landing=()=>{
    return(
        <div className="landingcontainer">
            <div className="imgandtext">
                <img className='logoimg' src={logo} width="25px" height="25px" />
                <p className='projecttitle'>TaskFlow</p>
            </div>
            <div className="twobuttonlandingpage">
                <button><Link to="/login">Sign in</Link></button>
                <button className="okay"><Link to="/login">Get Started</Link></button>
            </div>
           
        </div>
    );
}
export default Landing;