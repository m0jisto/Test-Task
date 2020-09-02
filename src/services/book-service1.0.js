export default class bookService {

    async getResource (url) {
        const res = await fetch(`${url}.json`);
        return await res.json();
    }

    async getAllBooks () {
        const result = await this.getResource('../../api/books');
        return result.map(book => this._transformBook(book))
    }
     
    async getBook (id = 1) {
        let book = await this.getResource('../../api/books')
        return this._transformBook(book[id-1])
    }


    _transformBook(book) {
        return {
            id: book.id,
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