import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchInput from '../search-panel';
import ToDoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItemForm from '../add-item';


export default class App extends Component {

    maxId = 100;

    /* create tasks */
    state = {
        todoData: [
            this.createTodoItem('Купить сметану'),
            this.createTodoItem('Сверстать страничку'),
            this.createTodoItem('Поехать к маме'),
            this.createTodoItem('Накормить кота')
        ],
        term: '',
        filter: 'all' //active, all, done
    };

    /* create tasks */  
    createTodoItem(label){
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    };

    /* delete task */
    deleteItem = (id)=> {
        this.setState(({ todoData })=>{
            const idx = todoData.findIndex((el)=> el.id === id);

    const newArray = [...todoData.slice(0, idx),
                  ...todoData.slice(idx + 1)];


    return {
            todoData: newArray
            } 
        });
    };

    /* create tasks */
    addItem = (text)=> {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData})=>{

            const newArr = [
                ...todoData,
                newItem
            ]

            return {
                todoData: newArr
            }
        });
    };

    /* array tasks */
    toogleProperty(arr, id, propName) {
        const idx = arr.findIndex((el)=> el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, 
                        [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    /* important tasks */
    onToogleImportant = (id) => {
        this.setState(({todoData})=>{      
            return {
                    todoData: this.toogleProperty(todoData, id, 'important')
                    }; 
                });
            };           



    /* done tasks */
    onToogleDone = (id) => {
        this.setState(({todoData})=>{
              
            return {
                     todoData: this.toogleProperty(todoData, id, 'done')
                    } 
                });
           };


    onSearchChange = (term) => {
        this.setState({ term });
    };

    search(items, term) {
        if (term.length === 0){
            return items;
        }
        return items.filter((item)=>{
            return item.label.toLowerCase().indexOf(term) > -1;
        });
    }


    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    filter(items, filter) {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item)=> !item.done);
            case 'done':
                return items.filter((item)=> item.done);
            default:
                return items;
        }
    }
    /* render elements */       
    render(){
        
        const {todoData, term, filter} = this.state;
        const visibleItems = this.filter(
            this.search(todoData, term), filter);
        const doneCount = todoData
                          .filter((el)=> el.done).length;

        const todoCount = todoData.length - doneCount;

        return (
            <div className="container bodyback">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <SearchInput 
            onSearchChange={ this.onSearchChange }/>
            <ItemStatusFilter filter={filter}
                              onFilterChange={this.onFilterChange}/>
            <ToDoList todos={visibleItems}
            onDeleted={ this.deleteItem }
            onToogleImportant={this.onToogleImportant}
            onToogleDone={this.onToogleDone}/>
            <AddItemForm onItemAdded={this.addItem}/>
            </div>
        );
    };  
};