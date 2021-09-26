import React, {useState} from 'react';
import TaskItem from '../TaskItem/TaskItem';
import AddNewItem from '../AddNewItem/AddNewItem';

const ItemList = ({dataFromApp}) => {
    console.log('This comes from app' + dataFromApp)
    const [themItems, setThemItems] = useState(dataFromApp); 
    const [newTodoName, setNewTodoName] = useState('');
    console.log('This is the state ' + themItems);
    console.log('The lenght of the state ' + themItems.length)
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

        let newTodos = themItems.slice();
        newTodos.push({
            id: generateNewId(),
            name: newTodoName,
            complete: false
        });
        console.log('This is the new item list: ' + newTodos)
        setThemItems(newTodos); setNewTodoName('');
    }

    const onChange= (event) => {
        setNewTodoName(event.target.value);
    }

    let retVal = [];
    console.log(retVal)
        for (let i = 0; i < themItems.length; i++) {
            let todo = themItems[i];
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
            {retVal}
            <AddNewItem onSubmit={onSubmit} onChange={onChange} newTodoName={newTodoName}/>
        </div>
    );
}

export default ItemList;
