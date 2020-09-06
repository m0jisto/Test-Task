import React, { Component } from 'react';
import bookService from '../../services/book-service2.0'
import './book.css'
export default class Book extends Component {
    bookService = new bookService()

    state = {
        book: null
    }

    componentDidUpdate (prevProps) {
        if (this.props.bookId !== prevProps.bookId && typeof +this.props.bookId === 'number' && this.props.bookId > 0 && this.props.bookId < 11) {
            this.bookService.getBook(this.props.bookId)
                .then(book => this.setState({
                    book
                }))
        } else if (this.props.bookId !== prevProps.bookId && this.props.bookId === '') {
            this.setState({
                book: null
            })
        } else if (this.props.bookId !== prevProps.bookId) {
            this.setState({
                book: ''
            })
        }
    }

    render() {
        if (this.state.book === null) {
            return (
                <div className="book"></div>
            )
        } else if (this.state.book === '') {
            return (
                <div className="book">
                    <h2 className="error">Введите корректный ID</h2>
                </div>
            )
        }


        const {name, authors, isbn, mediaType, numberOfPages, publiser, released, country} = this.state.book;

        return (
            <div className="book">
                <h2>Name: {name}</h2>
                <h3>Authors: {authors}</h3>
                <h3>ISBN: {isbn}</h3>
                <h3>Media Type: {mediaType}</h3>
                <h3>Number of pages: {numberOfPages}</h3>
                <h3>Publisher: {publiser}</h3>
                <h3>Released: {new Date(released).toString()}</h3>
                <h3>Country: {country}</h3>
            </div>
        );
    }
}