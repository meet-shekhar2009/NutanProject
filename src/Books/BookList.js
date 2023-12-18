import BookShow from "./BookShow"
const BookList = ({ books, onDelete, onEdit }) => {
    const renderedBooks = books.map((book) => {
        return <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete} />;
    });
    return <div>
        {renderedBooks}
    </div>
}
export default BookList;