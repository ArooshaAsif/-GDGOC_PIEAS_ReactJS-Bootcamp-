import { Books } from "./books.js";

const BookAuthors = () => {
    const authors = Books.map(book => book.author);
    return (
        <div>
<h1 className="section">Top Authors </h1>
        <h3>Authors</h3>
        <ul>
            {authors.map((author, index) => (
                <li key={index}>{author}</li>
            ))}
        </ul>
            </div>
    );
};

export default BookAuthors;