import React, { Component } from 'react';
// import bookService from '../../services/book-service1.0'; //Локальное API
import bookService from '../../services/book-service2.0'; //Сторонее API
import './app.css';

import SeacrhId from '../search-id';
import ListBooks from '../list-books'
import Book from '../book'

export default class App extends Component {
    constructor () {
        super();
        this.updateBooks()
        this.onUpdateSearchId = this.onUpdateSearchId.bind(this);
    }

    bookService = new bookService();

    state = {
        books: {},
        book: {}
    }

    updateBooks() {
        this.bookService.getAllBooks()
            .then(data => {
                this.setState({books: data})
            })
    }

    onUpdateSearchId(term) {
        if (typeof +term === 'number' && term > 0 && term < 11) {
            this.bookService.getBook(term)
                .then(data => {
                    this.setState({book: data})
                })
        } else if (term === '') {
            this.setState({book: false})
        } else if (typeof +term === 'number') {
            this.setState({book: ''})
        } 
    }

    render() {
        const {books, book} = this.state

        return (
            <div className="app">
                <h1>Books library</h1>
                <SeacrhId
                    onUpdateSearchId={this.onUpdateSearchId}/>

                <div className="container">
                    <ListBooks books={books}/>
                    <Book book={book}/>
                </div>
            </div>
        )
    }
};
