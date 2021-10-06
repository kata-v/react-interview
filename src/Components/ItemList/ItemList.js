import React, {useState} from 'react';
import TaskItem from '../TaskItem/TaskItem';
import AddNewItem from '../AddNewItem/AddNewItem';
import './ItemList.css';

const ItemList = ({dataFromApp}) => {
    const [itemList, setItemList] = useState(dataFromApp); 
    const [newTodoName, setNewTodoName] = useState('');
    const [newId, setNewId] = useState(dataFromApp.length)

   const onDoneClick = (id) => {
        let todoItems = itemList.map((i) => {
            if (todoItems[i].id === id) {
                let newComplete = !todoItems[i].complete;
                todoItems[i].complete = newComplete;
            }
        });
        setItemList(todoItems);
     };
    

    const onRemoveClick = (id) => {
        //implement this logic
        let taskRemoved = itemList.filter(function(x){
            return x.id !== id;
        });

        setItemList(taskRemoved);        
    }
    
   const generateNewId = () => {
        let getNewId = newId + 1;        
        setNewId(getNewId);
        return getNewId;
    }

   const onSubmit = (event) =>{
        event.preventDefault();

        let newTodos = [...itemList, {
            id: generateNewId(),
            name: newTodoName,
            complete: false
        }]
        
        setItemList(newTodos); setNewTodoName('');
    }

    const onChange= (event) => {
        setNewTodoName(event.target.value);
    }

    let retVal = [];
    console.log(retVal)
        for (let i = 0; i < itemList.length; i++) {
            let todo = itemList[i];
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
