import {Link,useLocation} from 'react-router-dom'
import logo from '../assets/image4.png'
import './Navbar.css';
const Navbar=()=>{
    const location=useLocation();
    return (
        
        <div className="navbarcontainer">
            <div className="secondcontainernav">
                <div className="imgandtext">
                    <img className='logoimg' src={logo} width="25px" height="25px" />
                    <p className='projecttitle'>TaskFlow</p>
                </div>
                <div className="teaorstu">
                    <button className={location.pathname==="/student"?"active":""}><Link to="/student">Student</Link></button>
                    <button className={location.pathname==="/teacher"?"active":""}><Link to="/teacher">Teacher</Link></button>
                </div>
            </div>
            <div className="nameandlogout">
                <p className='name'>JD</p>
                <button><Link to="/">Sign out</Link></button>
            </div>
        </div>
    );
}
export default Navbar