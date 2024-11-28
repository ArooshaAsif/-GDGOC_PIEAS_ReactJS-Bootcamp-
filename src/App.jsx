import HighRatedBooks from "./Components/HighRatedBook";
import BookDetails from "./Components/BookDetails";
import FictionBooks from "./Components/FictionalBook";
import BookAuthors from "./Components/BookAuthors";

function App() {
    
    return (
        <div>
            <h1 className="h1">Wellcome to Library </h1>
            <HighRatedBooks />
            <BookDetails />
            <FictionBooks />
            <BookAuthors />
        </div>
    );
}

export default App;