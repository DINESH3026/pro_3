import {Link} from "react-router-dom"
import AppLayout from "../components/AppLayout";
import './Teacher.css'
import {classInfo,teacherStats} from '../data/MockData.js'
import WeeklyActivityGraph from "../components/WeeklyActivityGraph.jsx";
import TopStudentsGraph from "../components/TopStudentGraph.jsx";
const Teacher=()=>{
    return(
        <div>
            <AppLayout>
                <div className="wholeteachercontainer">
                    <div className="topcardteacher">
                        <div className="leftbar">
                            <p style={{fontWeight:"900",fontSize:"23px"}}>Instructor Overview</p>
                            <p style={{fontSize:"15px",color:"grey"}}>Monitoring {classInfo.courseName} | {classInfo.courseName}</p>
                        </div>
                        <div className="rightbarteacher">
                            <div className="paa">
                                <p className="comrate">{teacherStats.completionRate}% Completion Rate</p>
                                <p className="overd">{teacherStats.overdue} Overdue</p>
                            </div>
                            <button className="Createtaskteacher">+ Create Task</button>
                        </div>
                    </div>
                    <div className="fourcardteacher">
                        <div className="ove">
                            <p className="babu">ACTIVE STUDENTS</p>
                            <p className="bab">{teacherStats.activeStudents}</p>
                            <div className="progresslinecon">
                                <div className="innerprogressline" style={{width:`${(teacherStats.activeStudents/7)*100}%`}}>

                                </div>
                            </div>
                        </div>
                        <div className="ove">
                            <p className="babu">TOTAL TASKS</p>
                            <p className="bab">{teacherStats.totalTasks}</p>
                            <div className="progresslinecon">
                                <div className="innerprogressline" style={{width:`${(teacherStats.totalTasks/10)*100}%`}}>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="ove">
                            <p className="babu">COMPLETED</p>
                            <p className="bab">{teacherStats.completed}</p>
                            <div className="progresslinecon">
                                <div className="innerprogressline" style={{width:`${(teacherStats.completed/teacherStats.totalTasks)*100}%`}}>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="ove">
                            <p className="babu">OVERDUE</p>
                            <p className="bab">{teacherStats.overdue}</p>
                            <div className="progresslinecon">
                                <div className="inner4progressline" style={{width:`${(teacherStats.overdue/teacherStats.totalTasks)*100}%`}}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="graphcon">
                        <div className="leftgraph">
                            <WeeklyActivityGraph/>
                        </div>
                        <div className="rightgraph">
                            <TopStudentsGraph/>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </div>
    );
}
export default Teacher;