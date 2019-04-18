import React, {Component} from 'react';
import './search-panel.css';


export default class SearchInput extends Component {
    
    state = {
        term: ''
    };

    onSearchChange =(e)=>{
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };


    render() {
        return (
                <input type="text"
                className="search-input" 
                placeholder="Поиск"
                onChange={this.onSearchChange}
                value={this.state.term}></input>
        );
    };
}
