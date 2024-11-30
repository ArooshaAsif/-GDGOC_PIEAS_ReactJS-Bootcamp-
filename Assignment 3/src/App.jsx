import React, { useState } from 'react';
import { BooksData } from './components/books'; // Import BooksData
import './App.css'; 

function App() {
  // State for favorite books and borrowed books
  const [favBooks, setFavBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  // Function to add a book to the favorites list
  const addToFavorites = (book) => {
    setFavBooks([...favBooks, book]);
  };

  // Function to borrow a book
  const borrowBook = (book) => {
    setBorrowedBooks([...borrowedBooks, book]);
  };

  return (
    <div>
      <h1>My Book App</h1>

      {/* Display Books Data */}
      <div>
        <h2>Available Books</h2>
        {BooksData.length === 0 ? (
          <p>No books available</p>
        ) : (
          BooksData.map((book) => (
            <div key={book.id} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Rating:</strong> {book.rating}</p>
              <p><strong>Genre:</strong> {book.genre}</p>

              {/* Buttons to add to Favorites and Borrow */}
              <button onClick={() => addToFavorites(book)}>Add to Favorites</button>
              <button onClick={() => borrowBook(book)}>Borrow</button>
            </div>
          ))
        )}
      </div>

      {/* FavBooks Section */}
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

      {/* Borrowed Books Section */}
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
    </div>
  );
}

export default App;
