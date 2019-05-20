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
            <span class="todo-list-item-buttons">
                <button type="button"
                        className="btn btn-outline-success btn-sm button"
                        onClick={onToogleDone}>
                        <i className="fa fa-check"/>
                </button>
                <button type="button"
                        className="btn btn-outline-danger btn-sm button"
                        onClick={onDeleted}>
                        <i className="fa fa-trash-o"/>
                </button>
            </span>
        </span>
        );
    };

export default TodoListItem