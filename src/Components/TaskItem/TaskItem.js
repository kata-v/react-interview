import React from 'react';
import './TaskItem.css';

const TaskItem = ({todo, isItDone, change, remove}) => {

    let color;
    let text;

        if (isItDone === true) {
            color = 'lightgreen';
            text = 'Complete';
        } else {
            color = 'lightblue';
            text = 'Incomplete';
        }

    return (
        <div className="wrapper" style={{backgroundColor: color}}>
                <p className="task-title">{todo}</p>
                <button
                    className="btn btn-task"
                    onClick={change}>
                    {text}
                </button>
                <button
                    className="btn btn-task"
                    onClick={remove}>
                    Remove from list
                </button>
            </div>
    );
}

export default TaskItem;
