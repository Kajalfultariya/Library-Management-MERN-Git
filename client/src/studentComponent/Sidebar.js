import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import axios from "axios"


const Sidebar = ({ currentPage, setCurrentPage, borrowedBooks,
  sidebarOpen, setSidebarOpen, studentInfo, books }) => {

  const navigate = useNavigate();
  const [modelShow, setModelShow] = useState(false)

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [isbn, setIsbn] = useState("");
  const [err, setErr] = useState("")

  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h2>📚  {sidebarOpen ? "LibHub" : ''}</h2>
        <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? '✕' : '☰'}
        </button>
      </div>
      <ToastContainer />
      <nav className="sidebar-nav">
        <button
          className={`nav-item ${currentPage === 'dashboard' ? 'active' : ''}`}
          onClick={() => setCurrentPage('dashboard')}
        >
          <span className="icon">📊</span>
          {sidebarOpen && <span>Dashboard</span>}
        </button>
        <button
          className={`nav-item ${currentPage === 'browse' ? 'active' : ''}`}
          onClick={() => setCurrentPage('browse')}
        >
          <span className="icon">🔍</span>
          {sidebarOpen && <span>Browse Books</span>}
        </button>

        {localStorage.getItem("credentials") === "student" ? <>
          <button
            className={`nav-item ${currentPage === 'borrowed' ? 'active' : ''}`}
            onClick={() => setCurrentPage('borrowed')}
          >
            <span className="icon">📖</span>
            {sidebarOpen && <span>
              My Books ({!studentInfo.activeBorrows ? 0 : studentInfo.activeBorrows.length})</span>}
          </button>
          <button
            className={`nav-item ${currentPage === 'profile' ? 'active' : ''}`}
            onClick={() => setCurrentPage('profile')}
          >
            <span className="icon">👤</span>
            {sidebarOpen && <span>Profile</span>}
          </button>
        </>
          : <> <button
            className={`nav-item ${currentPage === 'addbook' ? 'active' : ''}`}
            onClick={() => {
              setModelShow(true)
              setCurrentPage('addbook')
            }}
          >
            <span className="icon">📖</span>
            Add New Book</button>
            <button
              className={`nav-item ${currentPage === 'browsestudent' ? 'active' : ''}`}
              onClick={() => {
              
                setCurrentPage('browsestudent')
              }}
            >
              <span className="icon">📖</span>
              Browse Student</button></>
        }
      </nav>

      {modelShow && <div className="modal-overlay" >
        <div className="modal-content" style={{ width: "600px", textAlign: "left" }}>
          <center><h3>Add New Book</h3></center>
          <div className="input-groupmodel" >
            <label>Enter Title</label>
            <input
              id="title"
              type="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}

              required
            />
          </div>
          <div className="input-groupmodel">
            <label>Enter Author</label>
            <input
              id="author"
              type="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}

              required
            />
          </div>
          <div className="input-groupmodel">
            <label>Enter Category</label>
            <input
              id="category"
              type="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}

              required
            />
          </div>
          <div className="input-groupmodel">
            <label>Enter Year</label>
            <input
              id="year"
              type="year"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}

              required
            />
          </div>
          <div className="input-groupmodel">
            <label>Enter Isbn</label>
            <input
              id="isbn"
              type="isbn"
              name="isbn"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              required
            />
          </div>
          <div><p style={{ color: "red" }}>{err}</p></div>
          <div className="modal-actions"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "20px"
            }}>
            <button className="setting-btn"
              onClick={() => {
                setModelShow(false)
                setTitle("")
                setAuthor("")
                setCategory("")
                setIsbn("")
                setYear("")
              }}
            >Cancle
            </button>
            <button className="setting-btn"
              onClick={async () => {
                if (!title || !author || !category || !isbn || !year) {
                  setErr("Enter all details...")
                }
                else {
                  const formData = {
                    id: books.length,
                    title: title,
                    author: author,
                    category: category,
                    isbn: "978 -" + isbn,
                    year: year,
                    available: []
                  }
                  //console.log("formdat",formData)
                  await axios.post("http://localhost:8000/api/create",
                    formData)
                    .then((response) => {
                      toast.success("successfully updated Profile");
                      setModelShow(false)
                      setTitle("")
                      setAuthor("")
                      setCategory("")
                      setIsbn("")
                      setYear("")
                      setCurrentPage('browse')
                      window.location.reload()
                    })
                    .catch(error => { console.log("errr", error) })

                }
              }}
            >Add Book
            </button>
          </div>
        </div>
      </div>
      }
      <div className="sidebar-footer">

        <button className="logout-btn" onClick={() => {
          localStorage.removeItem("studentId")
          localStorage.removeItem("studentPersonalId")
          localStorage.removeItem("AdminDetail")
          navigate('/')
        }} >

          <span className="icon">🚪</span>
          {sidebarOpen && <span>Logout</span>}


        </button>

      </div>
    </aside>

  )
}

export default Sidebar