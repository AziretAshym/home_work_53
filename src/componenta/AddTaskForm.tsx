
const AddTaskForm = ({addNewTask, currentTask, setCurrentTask}) => {
    return (
        <div>
            <div className="container">
                <div className="form">
                    <input type="text" placeholder={'Enter new task'} onChange={(e) => setCurrentTask(e.target.value)} value={currentTask}/>
                    <button type={"button"} className={'addNewTaskBtn'} onClick={addNewTask}>Add new task</button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskForm;