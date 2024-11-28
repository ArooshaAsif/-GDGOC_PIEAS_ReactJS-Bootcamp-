const BookCard = ({ title, author, rating, genre }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Rating: {rating}</p>
            <p>Genre: {genre}</p>
        </div>
    );
};

export default BookCard;