import BookCard from "./BookCard";
import { Books } from "./books.js";

const HighRatedBooks = () => {
    const highRated = Books.filter(book => book.rating > 4.5);
    return (
        <div>

        <h1 className="section">High rated books</h1>
     
        <div className="hrb">
            {highRated.map(book => (
             <p><BookCard key={book.id} {...book} /></p>
            ))}
       
        </div>
        </div>
    );
};

export default HighRatedBooks;