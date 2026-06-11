import './KanbanCard.css'
const KanbanCard=({task})=>{
    return (
        <div className="totalconatiner">
            <div className="firstline">
                <div className="prio">
                    <p>{task.priority.toUpperCase()} PRIORITY</p>
                </div>
                <div className="dueinday">
                    <p>Due in {task.dueInDays}d</p>
                </div>
            </div>
            <p style={{fontWeight:"bolder",fontSize:"14px",marginBottom:"10px"}}>{task.title}</p>
            <p style={{fontSize:"12px",marginBottom:"8px",color:"grey"}}>{task.description}</p>
            <div className="algori">
                <p>{task.subject}</p>
            </div>
            <div className="linebelowit">

            </div>
            <div className="percentdone">
                <p>{task.progress}% done</p>
                
            </div>
            <div className="progressforthekabancard">
                <div className="innerprogresslinekanban" style={{width:`${task.progress}%`}}>

                </div>
            </div>
        </div>
    );
}
export default KanbanCard