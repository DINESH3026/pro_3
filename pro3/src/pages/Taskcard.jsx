import './Taskcard.css'
const Taskcard=({task})=>{
    return (
        <div className="wholetaskcardcontainer" style={{marginTop:"10px"}}>
            <div className="insidecontainer" >
                <div className="algohighdue">
                    <div className="algoandhigh">
                        <div className="algo">
                            <p>{task.subject}</p>
                        </div>
                        <div className="high">
                            <p>{task.priority.toUpperCase()} PRIORITY</p>
                        </div>
                    </div>
                    <div className="due">
                        <p>Due in {task.dueInDays}d</p>
                    </div>
                </div>
                <div className="systemarch">
                    <p>{task.title}</p>
                </div>
                <div className="createa">
                    <p>{task.description}</p>
                </div>
                <div className="reaminder">
                    <p>Reminder: {task.reminderType} reminder . {task.reminderCadence}</p>
                </div>
                <div className="lineebelow">

                </div>
                <div className="upandmarkcom">
                    <button className="buttonupand1" style={{backgroundColor:"black"}}>Upload submission</button>
                    <button className="buttonupand1" style={{backgroundColor:"hsla(240, 91%, 71%, 0.886)"}}>Mark Completed</button>
                </div>
            </div>
        </div>
    );
}
export default Taskcard