import React, { Component } from 'react';
import './add-item.css';


export default class AddItemForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
           label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label:''
        })
    };

    render() {
        return (
            <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
            <input type="text"
                   className="form-control"
                   onChange={this.onLabelChange}
                   placeholder="Что Вам нужно сделать?"
                   value={this.state.label}/>
                <button className="btn btn-outline-secondary buttonAdd">
                Добавить
                </button>
            </form>
        )
    };
};
