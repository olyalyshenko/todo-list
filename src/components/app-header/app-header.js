import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
    return (
    <header className="app-header">
        <h1>TODOLIST</h1>
        <h2>{toDo} в процессе, {done} сделано</h2>
    </header>
    );
   };

export default AppHeader;