import React from 'react';
import Book from '../Book/Book';

const Books = ({books}) => {
    const allBooks = books
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mb-5'>All Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                {
                    allBooks.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;