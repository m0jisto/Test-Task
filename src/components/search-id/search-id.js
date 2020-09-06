import React from 'react';
import './search-id.css'

const SearchId = (props) => {
    return (
        <input
            className="seacrh-id"
            type="text"
            placeholder="Поиск книги по id (От 1 до 10)"
            onChange={(e) => props.onUpdateSearchId(e.target.value)}/>
    )
}

export default SearchId