import React, { Component } from 'react';
import bookService from '../../services/book-service2.0'
import './list-books.css'
export default class ListBooks extends Component {
    bookService = new bookService()

    state= {
        books: null
    }

    componentDidMount () {
        this.bookService.getAllBooks()
            .then(books => {
                this.setState({books})
            })
    }

    renderBooks () {
        let {books} = this.state

        console.log(books)

        if (books) {
            return books.map((item) => {
                if (typeof item === 'object') { 
                    const {id, name} = item;
                    return (
                        <li key={id}
                            onClick={() => this.props.onUpdateSearchId(id)}>
                            {name}
                        </li>
                    )
                }
                
                return console.error('Были переданы неправильные данные с сервера')
            })
        }
    }

    render () {
        const elements = this.renderBooks()

        return (
            <div className="list-books">
            <h2>Список книг:</h2>
            <hr/>
            <ul>
                {elements}
            </ul>
         </div>
        )
    }
}