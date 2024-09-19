
const Task = (taskText) => {
    return (
        <div>
            <div className="oneTask">
                <p className={'taskText'}>{taskText.text}</p>
                <button type={"button"} className={'taskDeleteBtn'}>
                    <img src="https://img.icons8.com/?size=100&id=KPhFC2OwpbWV&format=png&color=000000" alt="Bucket"/>
                </button>
            </div>
        </div>
    );
};

export default Task;