import React from 'react';
import './AddNewItem.css';

const AddNewItem = ({onSubmit, onChange, newTodoName}) => {
    return (
        <div>
            <form
                className="wrapper"
                style={{'grid-template-columns': '7fr 2fr'}}
                onSubmit={onSubmit}
                >
                <input
                    placeholder="Add new todo"
                    value={newTodoName}
                    onChange={onChange}
                />
                <button
                    className="btn btn-success"
                    type="submit"
                    value="Submit"
                    onSubmit={onSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddNewItem;
