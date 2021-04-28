import {promiseHell} from "../main/promises";

describe('Promises', () => {
    it('should get book by author', async () => {
        const formattedBooks = await promiseHell();
        expect(formattedBooks).toEqual([
            'Lord of the rings - Tolkien',
            'Harry Potter - J.K Rowling',
            'Clean Code - Robert C. Martin',
        ])
    })
});