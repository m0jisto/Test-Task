import nextId from "react-id-generator";

export default class bookService {

    async getResource (url) {
        const res = await fetch(url);

        return await res.json();
    }

    async getAllBooks () {
        const result = await this.getResource('https://www.anapioficeandfire.com/api/books');
        return result.map(book => this._transformBook(book))
    }
     
    async getBook (id) {
        let book = await this.getResource(`https://www.anapioficeandfire.com/api/books/${id}`)
        return this._transformBook(book)
    }


    _transformBook(book) {
        return {
            id: nextId(),
            name: book.name,
            authors: book.authors,
            isbn: book.isbn,
            mediaType: book.mediaType,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released,
            country: book.country
        }
    }
}