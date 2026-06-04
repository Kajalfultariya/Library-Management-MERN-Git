import React, { useState } from "react";

const BrowsePage = ({ searchQuery, setSearchQuery, filterCategory,
    books, setFilterCategory, handleBorrowBook,
    studentInfo }) => {

    const [filteredBooks, setFilteredBooks] = useState(books)
    const categories = ['All', ...new Set(books.map(book => book.category))];


    const onSearchChange = (e) => {
        const value = e.target.value.toLowerCase();
        const filtered = books.filter(item => item.title.toLowerCase().includes(value) ||
            item.author.toLowerCase().includes(value) || item.isbn.toLowerCase().includes(value)
            || item.category.toLowerCase().includes(value)
        );
        setFilteredBooks(filtered);
    };

    return (
        <div className="page browse-page">
            <div className="search-filter-section">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search by title or author or category..."
                    onChange={onSearchChange}
                />

                <div className="filter-buttons">
                    {categories.length > 0 &&
                        categories.map((itemcat, index) => {
                            return (
                                <button key={index}
                                    className={`filter-btn ${filterCategory === itemcat ? 'active' : ''}`}
                                    onClick={() => {

                                        if (itemcat === "All") { setFilteredBooks(books) }
                                        else {
                                            const filtered = books.filter(item => item.category.includes(itemcat))
                                            setFilteredBooks(filtered);
                                            setFilterCategory(itemcat)
                                        }

                                    }}
                                >
                                    {itemcat}
                                </button>
                            )
                        })}
                </div>
            </div>

            <div className="books-grid" style={{ marginBottom: "50px" }}>
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book, index) => (
                        <div key={index} className="book-card">
                            <div className="book-cover"
                                style={{
                                    height:
                                        localStorage.getItem("credentials") === "student" ? "150px" : "100px"
                                }}
                            >
                                <div className="cover-placeholder">
                                    <span className="book-icon">📕</span>
                                </div>
                                {localStorage.getItem("credentials") === "student" &&
                                    <div className=
                                        {`availability-badge ${book.available.includes(JSON.parse(localStorage.getItem("studentPersonalId")))
                                            ? 'borrowed' : 'available'}`}>
                                        {book.available.includes(JSON.parse(localStorage.getItem("studentPersonalId")))
                                            ? '✗ Borrowed' : '✓ Available'}
                                    </div>}
                            </div>

                            <div className="book-info">
                                <h3 className="book-title">{book.title}</h3>
                                <p className="book-author">{book.author}</p>
                                <p className="book-meta">
                                    <span className="category">{book.category}</span>
                                    <span className="year">{book.year}</span>
                                </p>
                                <p className="isbn">ISBN: {book.isbn}</p>
                            </div>
                            {localStorage.getItem("credentials") === "student" &&
                                <div className="book-actions">
                                    {book.available.includes(JSON.parse(localStorage.getItem("studentPersonalId"))) ? (
                                        <button className="borrowed-btn" disabled>
                                            📖 Borrowed
                                        </button>
                                    ) : (
                                        <button
                                            className="borrow-btn"
                                            onClick={() => handleBorrowBook(book._id, book.id)}
                                        >
                                            📥 Borrow
                                        </button>
                                    )}
                                </div>}
                        </div>
                    ))
                ) : (
                    <div className="empty-state">
                        <p>No books found. Try a different search!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BrowsePage