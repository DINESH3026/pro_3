import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Student from './pages/Student'
import Teacher from './pages/Teacher'
function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/student" element={<Student/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
