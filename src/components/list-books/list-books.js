import React from 'react';
import './list-books.css'

const ListBooks = ({books}) => {

    let elements

    if (Object.keys(books).length !== 0) {
        elements = books.map((item) => {
            if ( typeof item === 'object' ){ 
                const {id, name} = item;
                return (
                    <li key={id}>
                        {name}
                    </li>
                )
            }
    
            return console.error('С сервера были переданы неправильные данные')
        })
    }

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

export default ListBooks