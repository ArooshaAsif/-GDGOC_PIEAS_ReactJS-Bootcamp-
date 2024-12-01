import React, { useContext } from 'react';
import { BookContext } from './BookContext';

const Button = ({ bookTitle }) => {
  const { addBorrowedBook, addFavBook } = useContext(BookContext);

  return (
    <div>
      <button onClick={() => addBorrowedBook(bookTitle)}>Borrow Me</button>
      <button onClick={() => addFavBook(bookTitle)}>Add to Favorite</button>
    </div>
  );
};

export default Button;