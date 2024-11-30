import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  const addBorrowedBook = (book) => {
    if (!borrowedBooks.includes(book)) {
      setBorrowedBooks([...borrowedBooks, book]);
    }
  };

  const addFavBook = (book) => {
    if (!favBooks.includes(book)) {
      setFavBooks([...favBooks, book]);
    }
  };

  return (
    <BookContext.Provider value={{ borrowedBooks, favBooks, addBorrowedBook, addFavBook }}>
      {children}
    </BookContext.Provider>
  );
};