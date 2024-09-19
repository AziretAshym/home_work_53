
const AddTaskForm = () => {
    return (
        <div>
            <div className="container">
                <div className="form">
                    <input type="text" placeholder={'Enter new task'}/>
                    <button type={"button"} className={'addNewTaskBtn'}>Add new task</button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskForm;