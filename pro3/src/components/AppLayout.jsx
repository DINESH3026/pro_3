import Navbar from "./Navbar";
import '../App.css'
const AppLayout=({children})=>{
    return (
        <div className="applayoutcontainer">
            <Navbar/>
            <div className="applayoutcontent">
                {children}
            </div>
        </div>
    );
}
export default AppLayout