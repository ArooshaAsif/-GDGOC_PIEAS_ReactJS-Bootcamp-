import React, { useContext } from 'react';
import { BookContext } from './components/BookContext';

const FavBooks = () => {
  const { favBooks } = useContext(BookContext);

  return (
    <div>
      <h2>Favorite Books</h2>
      <ul>
        {favBooks.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavBooks;