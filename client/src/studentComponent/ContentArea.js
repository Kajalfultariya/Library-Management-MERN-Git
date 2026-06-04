import React, { useState } from "react";

const ContentArea = ({ books, studentInfo, borrowedBooks, borrowedBookDetails,
    handleReturnBook, filteredBooksStudent }) => {

    const categories = ['All', ...new Set(books.map(book => book.category))];
    const [returnModel, setReturnModel] = useState(false)

    return (
        <div className="page dashboard-page">
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon">📚</div>
                    <div className="stat-content">
                        <h3>{books.length}</h3>
                        <p>Total Books</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">✅</div>
                    <div className="stat-content">
                        <h3>
                            {localStorage.getItem("credentials") === "student" ?
                                !studentInfo.activeBorrows ? 0 : books.length - studentInfo.activeBorrows.length : ""}
                            {localStorage.getItem("credentials") === "admin" ?
                                !books ? 0 : books.length - borrowedBooks.length : ""}
                        </h3>
                        <p>Available</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">📖</div>
                    <div className="stat-content">
                        <h3>{localStorage.getItem("credentials") === "student" ?
                            !studentInfo.activeBorrows ? 0 : studentInfo.activeBorrows.length : ""}
                            {localStorage.getItem("credentials") === "admin" ?
                                !borrowedBooks ? 0 : borrowedBooks.length : ""}</h3>
                        <p>Currently Borrowed</p>
                    </div>
                </div>
            </div>

            <section className="dashboard-section">
                <h2>📌 Recent Activity</h2>
                <div className="activity-list">
                    {books.length > 0 ? (
                        books.map((book, idx) => {
                            return (
                                book.available.includes(JSON.parse(localStorage.getItem("studentPersonalId"))) ?
                                    <div key={book.id} className="activity-item">
                                        <div className="activity-info" key={idx} >
                                            <h4>{book.title}</h4>
                                            <p className="author">by {book.author}</p>

                                            {borrowedBooks.map((item, idx) => (
                                                item.bookId === book.id && item.studentId === localStorage.getItem("studentId") ?
                                                    <p className="date">Due: {item.dueDate}</p>
                                                    : ""
                                            ))}
                                        </div>
                                        <button className="return-btn"

                                            onClick={() =>
                                                setReturnModel(true)
                                            }
                                        >
                                            Return
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
                                        <p className="empty-state">No borrowed books. Start exploring!</p> : ""
                            )
                        })
                    ) : (
                        <p className="empty-state">No borrowed books. Start exploring!</p>
                    )}
                </div>
            </section>

            <section className="dashboard-section">
                <h2>🎯 Quick Statistics</h2>
                <div className="charts-grid">
                    <div className="chart-card">
                        <h3>Books by Category</h3>
                        <div className="category-stats">
                            {categories.length > 0 &&
                                categories.map((item, index) => {
                                    return (
                                        item !== "All" &&
                                        <div className="stat-row" key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                                            <span>{item}</span>
                                            {/*<div className="progress-bar">
                                                <div className="progress" style={{ width: '33%' }}></div>
                                            </div>*/}

                                            <span className="count">
                                                {books.filter(book => {
                                                    const matchesCategory = book.category === item;
                                                    return matchesCategory
                                                }).length}

                                            </span>
                                        </div>

                                    )
                                })}


                        </div>
                    </div>

                    <div className="chart-card">
                        <h3>Availability Status</h3>
                        <div className="pie-chart">
                            <div className="pie-item available">
                                <span>{books.filter(b => b.available).length}</span>
                            </div>
                            <div className="pie-info">
                                <p><span className="dot available-dot"></span>
                                    Available:
                                    {localStorage.getItem("credentials") === "student" ?
                                        !studentInfo.activeBorrows ? 0 : books.length - studentInfo.activeBorrows.length : ""}
                                    {localStorage.getItem("credentials") === "admin" ?
                                        !books ? 0 : books.length - borrowedBooks.length : ""}
                                </p>
                                <p><span className="dot borrowed-dot"></span>
                                    Borrowed:
                                    {localStorage.getItem("credentials") === "student" ?
                                        !studentInfo.activeBorrows ? 0 : studentInfo.activeBorrows.length : ""}
                                    {localStorage.getItem("credentials") === "admin" ?
                                        !borrowedBooks ? 0 : borrowedBooks.length : ""}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ContentArea