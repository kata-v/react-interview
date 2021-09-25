import React, {useEffect, useState} from 'react';
import TaskItem from '../TaskItem/TaskItem';
import AddNewItem from '../AddNewItem/AddNewItem';

const ItemList = ({dataFromApp}) => {
    console.log('This comes from app' + dataFromApp)
    const [themItems, setThemItems] = useState(dataFromApp); 
    console.log('This it the state ' + themItems);
    console.log('The lenght of the state ' +themItems.length)
    console.log(dataFromApp.length);

   const onDoneClick = (id) => {
        var todoItems = themItems.slice();
        for (let i = 0; i < themItems.length; i++) {
            if (todoItems[i].id === id) {
                var newComplete = !todoItems[i].complete;
                todoItems[i].complete = newComplete;
            }
        }

        setThemItems(todoItems);
    }

    const onRemoveClick = (id) => {
        //implement this logic
        console.log('Remove Item!' + id);
    }

   const generateNewId = () => {
        return themItems.length + 1;
    }

   const onSubmit = (event) =>{
        event.preventDefault();

        var newTodos = themItems.slice();
        newTodos.push({
            id: generateNewId(),
            name: this.state.newTodoName,
            complete: false
        });

        this.setState({todos: newTodos, newTodoName: ''});
    }


    let retVal = [];
    console.log(retVal)
        for (let i = 0; i < dataFromApp.length; i++) {
            let todo = dataFromApp[i];
            retVal.push(
                <TaskItem
                    key={todo.id}
                    todo={todo.name}
                    isItDone={todo.complete}
                    change={() => onDoneClick(todo.id)}
                    remove={() => onRemoveClick(todo.id)}
                />
            );
            console.log('This round of' + retVal)
        } 

    return (
        <div>
            <p>This is the itemlist!</p>
            {retVal}
            <AddNewItem/>
        </div>
    );
}

export default ItemList;
