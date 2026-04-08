const Book = require('./Book.js');
class Ebook extends Book {
    constructor(title, author, year, fileExt) {
        super(title, author, year);
        this.fileExt = fileExt;
    }
    get fileExt() {
        return this._fileExt;
    }
    set fileExt(value) {
        if (typeof value !== 'string' || value.length === 0) {
            console.error('Формат файлу повинен бути рядком');
            return;
        }
        this._fileExt = value;
    }
    printInfo() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Формат файлу: ${this.fileExt}`);
    }
    static bookConvert(realBook, fileExt) {
        return new Ebook(realBook.title, realBook.author, realBook.year, fileExt);
    }
}
module.exports = Ebook;
