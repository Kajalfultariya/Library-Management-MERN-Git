import React, { useState, useEffect } from 'react';
import './StudentLibraryStyles.css';
import axios from "axios";
import Sidebar from './Sidebar';
import Header from './Header';
import ContentArea from './ContentArea';
import BrowsePage from './BrowsePage';
import BorrowedBook from './BorrowedBook';
import Profile from './Profile';
import BrowseStudent from './BrowseStudent';

const StudentLibraryManagement = () => {

  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [books, setBooks] = useState([]);
  //const [nextId, setNextId] = useState(0);
  const [listBorrowStuId, setListBorrowStuId] = useState([])
  const [studentInfo, setStudentInfo] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [studentListData, setStudentListData] = useState([])
  
  
  //get library Book data
  const fetchBookData = async () => {
    await axios.get("http://localhost:8000/api/fetch").then((response) => {
      //setNextId(response.data.length)
      setBooks(response.data)
    }).catch(error => { console.log("errr", error) })
  }

  //getlibrary student data
  const fetchStudentData = async () => {
    await axios.get("http://localhost:8000/api/fetchStudentOne/" + localStorage.getItem("studentId"))
      .then((response) => {
        setStudentInfo(response.data)
        setListBorrowStuId(response.data.activeBorrows)
      }).catch(error => { console.log("errr", error) })
  }

  //get library Borrow Book data
  const fetchBorrowBookData = async () => {
    await axios.get("http://localhost:8000/api/fetchBook").then((response) => {
      if (response.data)
        setBorrowedBooks(response.data)
    }).catch(error => { console.log("errr", error) })
  }
  //get library Student  data
  const fetchStudentListData = async () => {
    await axios.get("http://localhost:8000/api/fetchStudent").then((response) => {
      if (response.data)
        setStudentListData(response.data)
      console.log("student detail", response.data)
    }).catch(error => { console.log("errr", error) })
  }
  useEffect(() => {
    fetchBookData()
    fetchBorrowBookData()
    fetchStudentListData()
  }, [])
  useEffect(() => {
    if (localStorage.getItem("credentials") === "student") {
      fetchStudentData()
      fetchBorrowBookData()
    }
  }, [])


  const filteredBooksStudent = borrowedBooks.filter(book => {
    const filteredBookStu = book.studentId === localStorage.getItem("studentId");
    return filteredBookStu;
  });

  let arrIdData = []
  let arrData = []
  const handleBorrowBook = async (bookId, id) => {

    books.map(async (book) => {
      if (book.id === id) {
        if (!book.available.includes(JSON.parse(localStorage.getItem("studentPersonalId")))) {
          arrData = [...book.available, JSON.parse(localStorage.getItem("studentPersonalId"))]

          if (!listBorrowStuId.includes(id))
            arrIdData = [...listBorrowStuId, id]

          const newBorrow = {
            bookId: id,
            borrowDate: new Date().toISOString().split('T')[0],
            dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            status: 'active',
            studentId: localStorage.getItem("studentId")
          };

          const formData = { ...books, available: arrData }
          //update book list
          await axios.put(`http://localhost:8000/api/update/${bookId}`, formData)
            .then((response) => { }).catch(error => { console.log("errr", error) })


          //add boorow book data
          await axios.post("http://localhost:8000/api/createBook", newBorrow)
            .then((response) => {
            }).catch(error => { console.log("errr", error) })

          //update student list

          const formDataId = { ...studentInfo, activeBorrows: arrIdData }
          await axios.put(`http://localhost:8000/api/updateStudent/${studentInfo._id}`, formDataId)
            .then((response) => {
              window.location.reload()
            }).catch(error => { console.log("errr", error) })

        }
      }
      return (<></>)
    })

  };



  const handleReturnBook = async (bookId, id) => {

    books.map(async (book) => {
      if (book.id === id) {

        const newArr = book.available.filter(item => item !== JSON.parse(localStorage.getItem("studentPersonalId")))
        const formData = { ...books, available: newArr }
        //update book list
        await axios.put(`http://localhost:8000/api/update/${book._id}`, formData)
          .then((response) => {
            console.log("update book", response.data)
            // window.location.reload()
          })
          .catch(error => { console.log("errr", error) })


        borrowedBooks.map(async (item) => (
          //  console.log("id and stuid", item.bookId, item.studentId),
          item.bookId === id && item.studentId === localStorage.getItem("studentId") ?
            await axios.delete(`http://localhost:8000/api/deleteBook/${item._id}`)
              .then((res) => {
                setBorrowedBooks(borrowedBooks.filter(b => b.bookId !== bookId));
                //window.location.reload()
              })
              .catch(err => console.log(err)) : ""
        ))

        arrIdData = listBorrowStuId.filter(item => item !== id)
        //update student list
        const formDataId = { ...studentInfo, activeBorrows: arrIdData }
        await axios.put(`http://localhost:8000/api/updateStudent/${studentInfo._id}`, formDataId)
          .then((response) => {
            console.log("update res", response.data)
            window.location.reload()
          }).catch(error => { console.log("errr", error) })

      }
      return (<></>)
    })
  };

  let borrowedBookDetails = []
  if (!studentInfo.activeBorrows) { }
  else {
    borrowedBookDetails = borrowedBooks.map(borrow =>
      books.find(b => b.id === borrow.bookId) ? { ...books.find(b => b.id === borrow.bookId), ...borrow } : null
    ).filter(Boolean);
  }


  return (
    <div className="app-container">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        borrowedBooks={borrowedBooks}
        studentInfo={studentInfo}
        books={books}
      />


      {/* Main Content */}
      <main className="main-content">

        {/* Header */}
        <Header
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
          currentPage={currentPage}
          studentInfo={studentInfo}
        />

        {/* Content Area */}
        <div className="content-area">

          {/* Dashboard Page */}
          {currentPage === 'dashboard' && (
            <ContentArea
              books={books}
              borrowedBooks={borrowedBooks}
              studentInfo={studentInfo}
              borrowedBookDetails={borrowedBookDetails}
              handleReturnBook={handleReturnBook}
              filteredBooksStudent={filteredBooksStudent}
            />
          )}

          {/* Browse Books Page */}
          {currentPage === 'browse' && (
            <BrowsePage
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filterCategory={filterCategory}
              books={books}
              studentInfo={studentInfo}
              setFilterCategory={setFilterCategory}
              handleBorrowBook={handleBorrowBook}
            />
          )}
          {currentPage === "browsestudent" && (
            <BrowseStudent
              books={books}
              studentListData={studentListData}
              borrowedBooks={borrowedBooks}
            />
          )}
          {/* My Borrowed Books Page */}
          {currentPage === 'borrowed' && (
            <BorrowedBook
              books={books}
              borrowedBooks={borrowedBooks}
              borrowedBookDetails={borrowedBookDetails}
              handleReturnBook={handleReturnBook}
              setCurrentPage={setCurrentPage}
            />
          )}

          {/* Profile Page */}
          {currentPage === 'profile' && (
            <Profile
              studentInfo={studentInfo}
              books={books}
              borrowedBooks={borrowedBooks}
            />
          )}
        </div>
      </main>
    </div>
  );
}
export default StudentLibraryManagement;