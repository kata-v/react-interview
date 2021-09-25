import React from 'react';

const AddNewItem = () => {
    return (
        <div>
            <form
                className="wrapper"
                style={{'grid-template-columns': '7fr 2fr'}}
                >
                <input
                    placeholder="Add new todo"
                    
                />
                <button
                    className="btn btn-success"
                    type="submit"
                    value="Submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddNewItem;
