import React, {useState} from 'react';
import TaskItem from '../TaskItem/TaskItem';
import AddNewItem from '../AddNewItem/AddNewItem';
import './ItemList.css';

const ItemList = ({dataFromApp}) => {
    console.log('This comes from app' + dataFromApp)
    const [themItems, setThemItems] = useState(dataFromApp); 
    const [newTodoName, setNewTodoName] = useState('');
    const [newId, setNewId] = useState(dataFromApp.length)

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

        let taskRemoved = themItems.filter(function(x){
            return x.id != id;
        });
        console.log('This is the new array' + taskRemoved);
        console.log(themItems);
        setThemItems(taskRemoved);        
    }
    
   const generateNewId = () => {
        let getNewId = newId + 1;        
        setNewId(getNewId);
        return getNewId;
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
        } 

    return (
        <div >
            <div className="task-list">
                {retVal}
            </div>
            <AddNewItem onSubmit={onSubmit} onChange={onChange} newTodoName={newTodoName}/>
        </div>
    );
}

export default ItemList;
