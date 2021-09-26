import React from 'react';
import ItemList from './Components/ItemList/ItemList';
import './App.css';



const App = () => {
    const todos = [
        {id: 1, name: 'Go to the supermarket', complete: false},
        {id: 2, name: 'Call Alice', complete: false},
        {id: 3, name: 'Ask Alice to call Bob', complete: false},
        {id: 4, name: 'Do the dishes', complete: false},
        {id: 5, name: 'Change car tyres', complete: false}
    ];
    
        return (
            <div className="">
                <h1>Hi there!</h1>
                <ItemList dataFromApp={todos} />
            </div>
        );
    };


export default App;
