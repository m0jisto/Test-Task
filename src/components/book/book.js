import React from 'react';
import './book.css'

const Book = ({book}) => {
    let element

    if (Object.keys(book).length !== 0) {
        const {name, authors, isbn, mediaType, numberOfPages, publiser, released, country} = book;

        element = (
            <>
                <h2>Name: {name}</h2>
                <h3>Authors: {authors}</h3>
                <h3>ISBN: {isbn}</h3>
                <h3>Media Type: {mediaType}</h3>
                <h3>Number of pages: {numberOfPages}</h3>
                <h3>Publisher: {publiser}</h3>
                <h3>Released: {new Date(released).toString()}</h3>
                <h3>Country: {country}</h3>
            </>
        )
    } else if (book === '') {
        element = (
            <h2 className="error">Введите корректный ID</h2>
        )
    }

    return (
        <div className="book">
            {element}
        </div>
    )
}

export default Book