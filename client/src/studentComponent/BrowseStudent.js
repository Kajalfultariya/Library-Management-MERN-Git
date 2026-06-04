import React from "react";
import "./browseStudent.css"

const BrowseStudent = ({ books, studentListData, borrowedBooks }) => {
    return (
        <div className="student-container">
            <div className="list-header">
                <h2>Student Management</h2>
                {/*<button className="add-btn" >Add New Student</button>*/}
            </div>

            <div className="table-responsive">
                <table className="student-table">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Full Name</th>
                            <th>Email Address</th>
                            <th>EnrollmentId</th>
                            <th>Phone</th>
                            <th>Join Date</th>
                            <th>Borrow Date</th>
                            <th>Due Date</th>
                            <th>Borrow Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentListData.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.enrollmentId}</td>
                                <td>{student.phone}</td>
                                <td><span className="badge-count">
                                    {new Date(student.joinDate).toLocaleDateString()}
                                </span></td>
                                <td>
                                                                       
                                    {
                                    borrowedBooks.find(book => book.studentId === student._id) &&
                                    new Date(borrowedBooks.find(book => book.studentId === student._id).borrowDate).toLocaleDateString()}
                                    
                                    </td>
                                <td>
                                    {
                                    borrowedBooks.find(book => book.studentId === student._id) &&
                                    new Date(borrowedBooks.find(book => book.studentId === student._id).dueDate).toLocaleDateString()}
                                    </td>
                                <td className="actions">
                                    {student.activeBorrows.map((sbid) => (
                                        books.find(book => book.id === sbid) &&
                                        books.find(book => book.id === sbid).title + " , "
                                    ))}

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BrowseStudent