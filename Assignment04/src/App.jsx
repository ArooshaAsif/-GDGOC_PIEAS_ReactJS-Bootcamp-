import React, { useState, useEffect, createContext, useContext } from "react";
import "./App.css";

// Create Contexts
const BooksContext = createContext();
const BorrowedBooksContext = createContext();
const FavBooksContext = createContext();

// BooksProvider to manage the global state
const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  // Fetch data asynchronously from books.json
  useEffect(() => {
    fetch('./books.json')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  return (
    <BooksContext.Provider value={books}>
      <BorrowedBooksContext.Provider value={{ borrowedBooks, setBorrowedBooks }}>
        <FavBooksContext.Provider value={{ favBooks, setFavBooks }}>
          {children}
        </FavBooksContext.Provider>
      </BorrowedBooksContext.Provider>
    </BooksContext.Provider>
  );
};

// Custom hooks for accessing contexts
const useBooks = () => useContext(BooksContext);
const useBorrowedBooks = () => useContext(BorrowedBooksContext);
const useFavBooks = () => useContext(FavBooksContext);

// BookCard Component
const BookCard = ({ book }) => {
  const { setBorrowedBooks } = useBorrowedBooks();
  const { setFavBooks } = useFavBooks();

  const addToFavorites = () => {
    setFavBooks((prev) => [...prev, book]);
  };

  const borrowBook = () => {
    setBorrowedBooks((prev) => [...prev, book]);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <button onClick={addToFavorites}>Add to Favorites</button>
      <button onClick={borrowBook}>Borrow</button>
    </div>
  );
};

// BookList Component
const BookList = () => {
  const books = useBooks();

  return (
    <div>
      <h2>Available Books</h2>
      
       (
        books.map((book) = <BookCard key={book.id} book={book} />)
      )
    </div>
  );
};

// BorrowedBooks Component
const BorrowedBooks = () => {
  const { borrowedBooks } = useBorrowedBooks();

  return (
    <div>
      <h2>Borrowed Books</h2>
      {borrowedBooks.length === 0 ? (
        <p>No borrowed books yet</p>
      ) : (
        borrowedBooks.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
          </div>
        ))
      )}
    </div>
  );
};

// FavBooks Component
const FavBooks = () => {
  const { favBooks } = useFavBooks();

  return (
    <div>
      <h2>Favorite Books</h2>
      {favBooks.length === 0 ? (
        <p>No favorite books yet</p>
      ) : (
        favBooks.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
          </div>
        ))
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <BooksProvider>
      <div>
        <h1>My Book App</h1>
        <BookList />
        <FavBooks />
        <BorrowedBooks />
      </div>
    </BooksProvider>
  );
};

export default App;