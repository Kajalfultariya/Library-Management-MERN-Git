import React, { useState } from "react";

const BorrowedBook = ({ books, borrowedBooks, borrowedBookDetails, handleReturnBook, setCurrentPage }) => {
    const [returnModel, setReturnModel] = useState(false)
    return (
        <div className="page borrowed-page">
            {books.length > 0 ? (
                books.map((book, idx) => (
                    book.available.includes(JSON.parse(localStorage.getItem("studentPersonalId"))) ?
                        <div key={idx} className="borrowed-book-item">
                            <div className="borrowed-book-cover">
                                <div className="cover-placeholder">📕</div>
                            </div>

                            <div className="borrowed-book-details">
                                <h3>{book.title}</h3>
                                <p className="author">by {book.author}</p>


                                {borrowedBooks.map((item, idx) => (
                                    item.bookId === book.id && item.studentId === localStorage.getItem("studentId") ?

                                        <div className="dates" key={idx}>
                                            <p>📅 Borrowed: {item.borrowDate}</p>
                                            <p className={`due-date ${new Date(item.dueDate) < new Date() ? 'overdue' : ''}`}>
                                                📆 Due: {item.dueDate}
                                            </p>
                                        </div>

                                        : ""
                                ))}


                                <div className="dates">
                                    <p>📅 Borrowed: {book.borrowDate}</p>
                                    <p className={`due-date ${new Date(book.dueDate) < new Date() ? 'overdue' : ''}`}>
                                        📆 Due: {book.dueDate}
                                    </p>
                                </div>

                                <p className="isbn">ISBN: {book.isbn}</p>
                            </div>

                            <button className="return-btn" onClick={() =>
                                setReturnModel(true)}>
                                Return Book
                            </button>
                            {returnModel && (
                                <div className="modal-overlay">
                                    <div className="modal-content">
                                        <h3>Are you sure You want to Return?</h3>
                                        <div className="modal-actions"
                                            style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                                            <button className="setting-btn" onClick={() =>
                                                setReturnModel(false)}>Cancel</button>
                                            <button className="setting-btn delete-btn"
                                                onClick={() => {
                                                    handleReturnBook(book._id, book.id)
                                                    setReturnModel(false)
                                                }}
                                            >Return</button>
                                        </div>
                                    </div>
                                </div>)}
                        </div> : book.available.length < 0 ?
                            <div className="empty-state-large">
                                <div className="empty-icon">📚</div>
                                <h2>No Borrowed Books</h2>
                                <p>Start borrowing books to see them here!</p>
                                <button className="browse-btn" onClick={() => setCurrentPage('browse')}>
                                    Browse Books →
                                </button>
                            </div>
                            : ""
                ))
            ) : (
                <div className="empty-state-large">
                    <div className="empty-icon">📚</div>
                    <h2>No Borrowed Books</h2>
                    <p>Start borrowing books to see them here!</p>
                    <button className="browse-btn" onClick={() => setCurrentPage('browse')}>
                        Browse Books →
                    </button>
                </div>
            )}
        </div>
    )
}

export default BorrowedBook