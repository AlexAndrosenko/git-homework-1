class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }
    get title() {
        return this._title
    }
    set title(value) {
        if (typeof value !== 'string' || value.length === 0) {
            console.error('Назва книги повинна бути рядком')
            return
        }
        this._title = value
    }
    get author() {
        return this._author
    }
    set author(value) {
        if (typeof value !== 'string' || value.length === 0) {
            console.error('Автор книги повинен бути рядком')
            return
        }
        this._author = value
    }
    get year() {
        return this._year
    }
    set year(value) {
        if (typeof value !== 'number' || value < 0) {
            console.error('Рік видання книги повинен бути позитивним числом')
            return
        }
        this._year = value
    }
    printInfo() {
        console.log(
            `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}`
        )
    }
    static getOldestBook(books) {
        if (!books || books.length === 0) return null
        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest
        })
    }
}
module.exports = Book
