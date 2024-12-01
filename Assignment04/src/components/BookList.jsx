import React, { useContext } from "react";
import { BooksContext } from "./BooksContext";
import BookCard from "./BookCard";

const BookList = () => {
  const { books, setBorrowedBooks, setFavBooks } = useContext(BooksContext);

  const handleAdd = (title) => {
    setBorrowedBooks((prev) => [...prev, title]);
  };

  const handleFavorite = (title) => {
    setFavBooks((prev) => [...prev, title]);
  };

  return (
    <div>
      {books.map((book) => (
        <BookCard
          key={book.id}
          {...book}
          onAdd={handleAdd}
          onFavorite={handleFavorite}
        />
      ))}
    </div>
  );
};

export default BookList;