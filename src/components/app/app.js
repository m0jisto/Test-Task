import React, {Component} from 'react';
import './app.css';

import SeacrhId from '../search-id';
import ListBooks from '../list-books'
import Book from '../book'

export default class App extends Component {
    state = {
        bookId: null
    }

    onUpdateSearchId = (term) => {
        this.setState({bookId: term})
    }

    render() {
        const {bookId} = this.state

        return ( 
            <div className = "app" >
                <h1>Books library</h1> 
                <SeacrhId onUpdateSearchId = {this.onUpdateSearchId}/>

                <div className="container">
                    <ListBooks /> 
                    <Book bookId={bookId}/> 
                </div> 
            </div>
        )
    }
};