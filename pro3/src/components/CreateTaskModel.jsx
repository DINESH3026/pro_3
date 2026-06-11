import './CreateTaskModel.css'
import { useState } from 'react';
const CreateTaskModel=({onClose,onCreate})=>{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [subject, setSubject] = useState("");
    const [priority, setPriority] = useState("medium");
    const [deadline, setDeadline] = useState("");
    const [wholeClass, setWholeClass] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newTask={
            id: "t" + Date.now(),
            title,
            description,
            subject,
            priority,
            deadline,
            status: "pending",
            progress: 0,
            dueInDays: 7,
            assigneeInitials: wholeClass ? [] : ["AM"],
            reminderType: "daily",
            reminderCadence: "once per day"
        }
        onCreate(newTask);
        onClose();
    }
    return(
        <div className="wholeconataninerCreatetaskmodel">
            <div className='insidecont'>
                <div className="creatandcross">
                    <p>Create Task</p>
                    <button  type="button" onClick={onClose}>X</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <label style={{fontSize:"13px",color:"grey"}}>Title</label><br/>
                    <input className='titleclass' required placeholder='e.g. Binary Search tree lab' type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                    <br/>
                    <label style={{fontSize:"13px",color:"grey"}}>Description</label><br/>
                    <textarea className='descriotpnclass' required value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                    <div className="subandprp">
                        <div className="subb">
                            <label style={{fontSize:"13px",color:"grey"}}>Subject</label>
                            <br/>
                            <input className='okkkkkke' required placeholder='Algorithm' value={subject} onChange={(e)=>{setSubject(e.target.value)}} />
                        </div>
                        <div className="prr">
                            <label style={{fontSize:"13px",color:"grey"}}>Priority</label><br/>
                            <select className='ooo'
                                value={priority} onChange={(e)=>setPriority(e.target.value)}>
                                    <option value="low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                            </select>
                        </div>
                    </div>
                        <label style={{fontSize:"13px",color:"grey"}}>Deadline</label><br/>
                        <input className='babbb' type="date" required value={deadline} onChange={(e)=>{setDeadline(e.target.value)}} />
                        <p  style={{fontSize:"13px",color:"grey",marginBottom:"10px"}}>Assign to</p>
                        <label style={{fontSize:"13px"}} >
                        <input  type="checkbox" checked={wholeClass} onChange={(e) => setWholeClass(e.target.checked)}/>Whole Class</label>
                    
                    <div className="twobutt">
                        <button className='bbbbb' type="button" onClick={onClose}>close</button>
                        <button  className='sdfgh' type="submit">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default CreateTaskModel;