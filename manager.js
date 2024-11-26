// manager.js
import Books from './books.js';

// 1. Function to print titles with rating higher than 4.5
const printHighRatingBooks = () => {
  const highRatingBooks = Books.filter(book => book.rating > 4.5).map(book => book.title);
  console.log("Books with rating higher than 4.5:", highRatingBooks);
};

// 2. Function to iterate over books and print details
const printBookDetails = () => {
  Books.forEach(({ title, author, rating, genre }) => {
    console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
  });
};

// 3. Function to print titles with the genre "fiction"
const printFictionBooks = () => {
  const fictionBooks = Books.filter(book => book.genre.toLowerCase() === "fiction").map(book => book.title);
  console.log("Fiction Books:", fictionBooks);
};

// 4. Function to display an array of book authors
const getBookAuthors = () => {
  const authors = Books.map(book => book.author);
  console.log("Book Authors:", authors);
};

// Call the functions to test
printHighRatingBooks();
printBookDetails();
printFictionBooks();
getBookAuthors();
