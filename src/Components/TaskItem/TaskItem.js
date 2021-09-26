import React from 'react';


const TaskItem = ({todo, isItDone, change, remove}) => {

    let color;
    let text;

        if (isItDone === true) {
            color = 'lightgreen';
            text = 'Complete';
        } else {
            color = 'pink';
            text = 'Incomplete';
        }

    return (
        <div className="wrapper" style={{backgroundColor: color}}>
                <h3>{todo}</h3>
                <button
                    className="btn"
                    onClick={change}>
                    {text}
                </button>
                <button
                    className="btn"
                    onClick={remove}>
                    Remove from list
                </button>
            </div>
    );
}

export default TaskItem;
