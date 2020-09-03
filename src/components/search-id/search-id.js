import React, { Component } from 'react';
import './search-id.css'

export default class SearchId extends Component  {
    constructor (props) {
        super(props);
        this.onUpdateSearchId = this.onUpdateSearchId.bind(this)
    }

    onUpdateSearchId(e){
        const term = e.target.value;
        this.props.onUpdateSearchId(term);
    }

    render () {
        return (
            <input
                className="seacrh-id"
                type="text"
                placeholder="Поиск книги по id (От 1 до 10)"
                onChange={this.onUpdateSearchId}/>
        )
    }
}
