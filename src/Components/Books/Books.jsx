import React from 'react';
import Book from '../Book/Book';

const Books = ({books}) => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mb-5'>All Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                {
                    books.map(book => <Book key={book.bookId} books={books}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;