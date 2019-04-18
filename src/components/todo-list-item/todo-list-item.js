import React from 'react';

import './todo-list-item.css';

const TodoListItem = (props) => {

        const { label, onDeleted,
                onToogleImportant,
                onToogleDone,
                important, done } = props;

        let classNames = 'todo-list-item';
        
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
        <span className={ classNames }>
            <span className="todo-list-item-label" 
                onClick={ onToogleDone } >
                { label }
            </span>
            
            <button type="button"
                    className="btn btn-outline-success btn-sm button"
                    onClick={onToogleImportant}>
                    <i className="fa fa-exclamation"/>
            </button>
    
            <button type="button"
                    className="btn btn-outline-danger btn-sm button"
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o"/>
            </button>
        </span>
        );
    };

export default TodoListItem