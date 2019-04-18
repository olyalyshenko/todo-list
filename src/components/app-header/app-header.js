import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
    return (
    <header className="app-header">
        <h1>TODO LIST</h1>
        <h3>FROM LYSHENKO OLHA</h3>
        <h2>{toDo} в процессе, {done} сделано</h2>
    </header>
    );
   };

export default AppHeader;