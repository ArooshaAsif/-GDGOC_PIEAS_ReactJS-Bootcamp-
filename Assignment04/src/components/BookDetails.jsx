import BookCard from "./BookCard";
import { Books } from "./books.js";

const BookDetails = () => {
    return (
        <div>
            <h1 className="section">Books Details </h1>
        <p>
            {Books.map(book => (
                <BookCard key={book.id} {...book} />
            ))}
        </p>
        </div>
    );
};

export default BookDetails;