import {Link} from "react-router-dom"
import AppLayout from "../components/AppLayout";
const Login=()=>{
    return(
        <AppLayout>
            <div>
                <p>Login page</p>
                <Link to="/student">Student dashboard</Link>
                <Link to="/teacher">Teacher Dashboard</Link>
            </div>
        </AppLayout>
        
    );
}
export default Login;