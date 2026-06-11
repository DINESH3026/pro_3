    import {Link} from "react-router-dom"
    import AppLayout from "../components/AppLayout";
    import { useState } from "react";
    import './Teacher.css'
    import {classInfo,teacherStats,tasks as IntialTask} from '../data/MockData.js'
    import WeeklyActivityGraph from "../components/WeeklyActivityGraph.jsx";
    import TopStudentsGraph from "../components/TopStudentGraph.jsx";
    import KanbanCard from './KanbanCard.jsx'
    import grey from '../assets/grey.png'
    import CreateTaskModel from "../components/CreateTaskModel.jsx";
    const Teacher=()=>{
        const [TaskList,SetTaskList]=useState(IntialTask);
        const [ShowModel,SetShowModel]=useState(false);
        let filteredtasks1=[];
        const addTask=(newTask)=>{
            SetTaskList(prev=>[...prev,newTask]);
        }
        for(let i=0;i<TaskList.length;i++){
            if(TaskList[i].status==="pending"){
                filteredtasks1.push(TaskList[i]);
            }
        }
        let filteredtasks2=[];
        for(let i=0;i<TaskList.length;i++){
            if(TaskList[i].status==="inprogress"){
                filteredtasks2.push(TaskList[i]);
            }
        }
        let filteredtasks3=[];
        for(let i=0;i<TaskList.length;i++){
            if(TaskList[i].status==="completed"){
                filteredtasks3.push(TaskList[i]);
            }
        }
        let filteredtasks4=[];
        for(let i=0;i<TaskList.length;i++){
            if(TaskList[i].status==="overdue"){
                filteredtasks4.push(TaskList[i]);
            }
        }
        return(
            <div>
                {ShowModel && (<CreateTaskModel onClose={()=>SetShowModel(false)} onCreate={addTask} />)}
                <AppLayout>
                    <div className="wholeteachercontainer">
                        <div className="topcardteacher">
                            <div className="leftbar">
                                <p style={{fontWeight:"900",fontSize:"23px"}}>Instructor Overview</p>
                                <p style={{fontSize:"15px",color:"grey"}}>Monitoring {classInfo.courseName} | {classInfo.section}</p>
                            </div>
                            <div className="rightbarteacher">
                                <div className="paa">
                                    <p className="comrate">{teacherStats.completionRate}% Completion Rate</p>
                                    <p className="overd">{teacherStats.overdue} Overdue</p>
                                </div>
                                <button className="Createtaskteacher" onClick={()=>{ SetShowModel(true) }}>+ Create Task</button>
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
                        <div className="kanbanandrightthingcontainer">
                            <div className="pendingandinprofresscontainer">
                                <div className="kanancontainerforpending">
                                    <div className="pendingnameandcount">
                                        <div className="textforthis">
                                            <p className="hell" style={{fontSize:"14px"}}>~ Pending</p>
                                            <p className="roundnumber">{filteredtasks1.length}</p>
                                        </div>
                                        <div className="pendingconatiner">
                                            {filteredtasks1.map(task=>{
                                                return <KanbanCard task={task} />
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="kanancontainerforpending">
                                    <div className="pendingnameandcount">
                                        <div className="textforthis">
                                            <p className="hell" style={{fontSize:"14px"}}>~ In Progress</p>
                                            <p className="roundnumber">{filteredtasks2.length}</p>
                                        </div>
                                        <div className="pendingconatiner">
                                            {filteredtasks2.map(task=>{
                                                return <KanbanCard task={task} />
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pendingandinprofresscontainer">
                                <div className="kanancontainerforpending">
                                    <div className="pendingnameandcount">
                                        <div className="textforthis">
                                            <p className="hell" style={{fontSize:"14px"}}>~ Completed</p>
                                            <p className="roundnumber">{filteredtasks3.length}</p>
                                        </div>
                                        <div className="pendingconatiner">
                                            {filteredtasks3.map(task=>{
                                                return <KanbanCard task={task} />
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="kanancontainerforpending">
                                    <div className="pendingnameandcount">
                                        <div className="textforthis">
                                            <p className="hell" style={{fontSize:"14px"}}>~ OverDue</p>
                                            <p className="roundnumber">{filteredtasks4.length}</p>
                                        </div>
                                        <div className="pendingconatiner">
                                            {filteredtasks4.map(task=>{
                                                return <KanbanCard task={task} />
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </AppLayout>
            </div>
        );
    }
    export default Teacher;