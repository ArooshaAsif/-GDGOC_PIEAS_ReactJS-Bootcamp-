import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [favBooks, setFavBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const addToFavBooks = (book) => setFavBooks([...favBooks, book]);
  const addToBorrowedBooks = (book) => setBorrowedBooks([...borrowedBooks, book]);

  return (
    <BookContext.Provider
      value={{ favBooks, borrowedBooks, addToFavBooks, addToBorrowedBooks }}
    >
      {children}
    </BookContext.Provider>
  );
};