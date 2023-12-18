import { useState } from "react";
import BookEdit from "./BookEdit";
const BookShow = ({ book, onDelete, onEdit }) => {
    const [showEdit, setShowEdit] = useState(false);
    const handleDeleteClick = () => {
        onDelete(book.id);
    };
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };
    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    };


    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />;
    }




    return <div>
        <div>{content}</div>
        <button onClick={() => { setShowEdit(true) }}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
    </div>
}
export default BookShow;