import React from 'react';

import ToDoListItem from '../todo-list-item';
import './todo-list.css';

const ToDoList = ({ todos, onDeleted,
                    onToogleImportant,
                    onToogleDone }) => {

    const elements = todos.map((item)=> {
        const {id, ...itemProps} = item;

        return (
        <li key={id} className="list-group-item">
            <ToDoListItem {...itemProps} 
            onDeleted={()=> onDeleted(id)}
            onToogleImportant={()=>onToogleImportant(id)}
            onToogleDone={()=>onToogleDone(id)}/>
        </li>)
    });
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default ToDoList;