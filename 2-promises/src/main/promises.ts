const BOOKS = ['Lord of the rings', 'Harry Potter', 'Clean Code'];
const AUTHOR_BY_BOOK = {
    'Lord of the rings': 'Tolkien', 'Harry Potter': 'J.K Rowling', 'Clean Code': 'Robert C. Martin'
}

interface BookWithAutor {
    title: string;
    author: string;
}

function fetchBooks(): Promise<string[]> {
    return Promise.resolve(BOOKS)
}

function fetchBookAuthor(books: string[]): Promise<BookWithAutor[]> {

    return Promise.resolve(books.map(book => ({title: book, author: AUTHOR_BY_BOOK[book]})))
}

function format(bookWithAuthors: BookWithAutor[]): string[]  {
    return bookWithAuthors.map(book => `${book.title} - ${book.author}`);
}

export const promiseHell = (): Promise<string[]> => {
    return fetchBooks()
        .then((books) => {
            return fetchBookAuthor(books)
                .then((bookWithAuthors: BookWithAutor[]) => {
                    return format(bookWithAuthors);
                });
        });
}