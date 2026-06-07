import {Link} from "react-router-dom"
import {currentUser,students,tasks} from '../data/MockData'
import AppLayout from "../components/AppLayout";
import './Student.css';
import { useState } from "react";
import Taskcard from "./Taskcard";
const Student=()=>{
    let taskcompleted=0;
    let totaltask=0;
    let Percent=0;
    for(let i=0;i<students.length;i++){
        if(currentUser.name===students[i].name){
            taskcompleted=students[i].tasksCompleted
            totaltask=students[i].tasksTotal
            Percent=students[i].percent
        }
    }
    let overduecount=0;
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].status==="overdue"){
            overduecount++;
        }
    }
    let pendingwork=totaltask-taskcompleted;
    const [status,setstatus]=useState("All");
    const fillteredtasks=status==="All"?tasks:tasks.filter(task=>task.status===status.toLowerCase());
    return(
        <div>
            <AppLayout>
                <div className="studentcontainer">
                    <div className="nameandwelcomeback">
                        <p style={{fontSize:"13px",marginBottom:"5px"}}>Welcome Back</p>
                        <p style={{fontWeight:"bolder",fontSize:"25px"}}>{currentUser.name}</p>
                    </div>
                </div>
                <div className="threebar">
                    <div className="firstbar">
                        <p style={{marginBottom:"10px"}}>Overall Progress</p>
                        <p style={{marginBottom:"15px"}}><span style={{fontSize:"40px"}}>{Percent}%</span> &nbsp;&nbsp;<span style={{fontSize:"12px"}}>{taskcompleted}/{totaltask} Completed</span></p>
                        <div className="progcontainer" >
                            <div className="innnerline" style={{width:`${Percent}%` }}>

                            </div>
                        </div>
                    </div>
                    <div className="secondbar">
                        <div className="pend">
                            <p>Pending</p>
                            <p style={{fontSize:"40px"}}>{pendingwork}</p>
                        </div>
                        <div className="overdue">
                            <p>Overdue</p>
                            <p style={{fontSize:"40px"}}>{overduecount}</p>
                        </div>
                    </div>
                    
                    

                </div>
                <div className="bottomtwocontainer">
                        <div className="leftsidecont">
                            <div className="fourbuttonconatiner">
                                <button style={{background:status==="All"?"hsla(240, 91%, 71%, 0.886)":"transparent",color:"white"}} onClick={()=>{setstatus("All")}}>All</button>
                                <button style={{background:status==="Pending"?"hsla(240, 91%, 71%, 0.886)":"transparent",color:"white"}} onClick={()=>{setstatus("Pending")}}>Pending</button>
                                <button style={{background:status==="Completed"?"hsla(240, 91%, 71%, 0.886)":"transparent",color:"white"}} onClick={()=>{setstatus("Completed")}}>Completed</button>
                                <button style={{background:status==="Overdue"?"hsla(240, 91%, 71%, 0.886)":"transparent",color:"white"}} onClick={()=>{setstatus("Overdue")}}>Overdue</button>
                            </div>
                            <div className="hellooo">
                                {fillteredtasks.map(task=>{
                                return <Taskcard key={task.id} task={task}/>
                            })}
                            </div>
                        </div>
                        <div className="rightsidecont">
                            <p>hello</p>
                        </div>
                </div>
            </AppLayout>
        </div>
    );
}
export default Student;