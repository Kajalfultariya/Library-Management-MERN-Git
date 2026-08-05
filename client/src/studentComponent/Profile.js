import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const Profile = ({ studentInfo, borrowedBooks, books }) => {

    const navigate = useNavigate()
    const [updateProfileModel, setUpdateProfileModel] = useState(false)
    const [updatePwd, setUpdatePwd] = useState(false)
    const [deleteModel, setDeleteModel] = useState(false)

    const [currPwd, setCurrPwd] = useState("")
    const [newPwd, setNewPwd] = useState("")
    const [confirmPwd, setConfirmPwd] = useState("")
    const [err, setErr] = useState("")

    const [email, setEmail] = useState(studentInfo.email);
    const [password, setPassword] = useState(studentInfo.password);
    const [name, setName] = useState(studentInfo.name);
    const [eId, setEId] = useState(studentInfo.enrollmentId);
    const [phone, setPhone] = useState(studentInfo.phone);

    return (
        <div className="page profile-page">

            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-avatar">👨‍🎓</div>
                    <h2>{studentInfo.name}</h2>
                </div>
                <ToastContainer />
                <div className="profile-content">
                    <div className="profile-section">
                        <h3>📋 Personal Information</h3>
                        <div className="info-grid">
                            <div className="info-item">
                                <label>Enrollment ID</label>
                                <p>{studentInfo.enrollmentId}</p>
                            </div>
                            <div className="info-item">
                                <label>Email</label>
                                <p>{studentInfo.email}</p>
                            </div>
                            <div className="info-item">
                                <label>Phone</label>
                                <p>{studentInfo.phone}</p>
                            </div>
                            <div className="info-item">
                                <label>Member Since</label>
                                <p>{studentInfo.joinDate}</p>
                            </div>
                        </div>
                    </div>

                    <div className="profile-section">
                        <h3>📊 Library Statistics</h3>
                        <div className="stats-columns">
                            {/*<div className="stat-column">
                                <div className="stat-number">{studentInfo.totalBorrowed}</div>
                                <p>Total Books Borrowed</p>
                            </div>*/}
                            <div className="stat-column">
                                <div className="stat-number">{!studentInfo.activeBorrows ? 0 : studentInfo.activeBorrows.length}

                                </div>
                                <p>Currently Borrowed</p>
                            </div>
                            {/* <div className="stat-column">
                                <div className="stat-number">0</div>
                                <p>Overdue Books</p>
                            </div>*/}
                        </div>
                    </div>

                    <div className="profile-section">
                        <h3>⚙️ Account Settings</h3>
                        <div className="settings-buttons">
                            <button className="setting-btn"
                                onClick={() => {
                                    setDeleteModel(false)
                                    setUpdatePwd(true)
                                    setUpdateProfileModel(false)
                                }}
                            >Change Password</button>
                            <button className="setting-btn"
                                onClick={() => {
                                    setDeleteModel(false)
                                    setUpdatePwd(false)
                                    setUpdateProfileModel(true)
                                }}
                            >Update Profile</button>
                            <button className="setting-btn delete-btn"
                                onClick={async () => {

                                    setDeleteModel(true)
                                    setUpdatePwd(false)
                                    setUpdateProfileModel(false)
                                }}
                            >Delete Account</button>
                        </div>




                        {updateProfileModel && (
                            <div className="modal-overlay">
                                <div className="modal-content">
                                    <h3>Update Profile</h3>
                                    <div className="input-groupmodel">
                                        <label> Name</label>
                                        <input
                                            id="name"
                                            type="name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}

                                            required
                                        />
                                    </div>
                                    <div className="input-groupmodel">
                                        <label>Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="input-groupmodel">
                                        <label>Password</label>
                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="input-groupmodel">
                                        <label>enrollmentId</label>
                                        <input
                                            id="EnrollmentId"
                                            type="EnrollmentId"
                                            name="EnrollmentId"
                                            value={eId}
                                            onChange={(e) => setEId(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="input-groupmodel">
                                        <label>phone</label>
                                        <input
                                            id="phone"
                                            type="phone"
                                            name="phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div><p style={{ color: "red" }}>{err}</p></div>
                                    <div className="modal-actions"
                                        style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                                        <button className="setting-btn"
                                            onClick={() => {
                                                setName(studentInfo.name)
                                                setEmail(studentInfo.email)
                                                setPassword(studentInfo.password)
                                                setEId(studentInfo.enrollmentId)
                                                setPhone(studentInfo.phone)
                                                setErr("")
                                                setUpdateProfileModel(false)
                                            }}>
                                            Cancel
                                        </button>
                                        <button className="setting-btn" onClick={async () => {
                                            if (!name || !email || !phone || !eId || !password) {
                                                setErr("Enter all details...")
                                            }
                                            else {

                                                const formData = {
                                                    ...studentInfo, name: name,
                                                    email: email,
                                                    password: password,
                                                    enrollmentId: eId,
                                                    phone: phone
                                                }

                                                //update student password
                                                await axios.put(`http://libraryserver-mu.vercel.app/api/updateStudent/${studentInfo._id}`,
                                                    formData)
                                                    .then((response) => {
                                                        toast.success("successfully updated Profile");
                                                        setUpdateProfileModel(false)
                                                        setName(studentInfo.name)
                                                        setEmail(studentInfo.email)
                                                        setPassword(studentInfo.password)
                                                        setEId(studentInfo.enrollmentId)
                                                        setPhone(studentInfo.phone)
                                                    })
                                                    .catch(error => { console.log("errr", error) })
                                            }
                                        }
                                        }>Update</button>
                                    </div>
                                </div>
                            </div>

                        )}

                        {updatePwd && (
                            <div className="modal-overlay">
                                <div className="modal-content">
                                    <h3>Change Password</h3>
                                    <div className="input-groupmodel">
                                        <label>Current Password</label>
                                        <input
                                            type="password"
                                            name="currentPassword"
                                            autoComplete="current-password"
                                            value={currPwd}
                                            onChange={(e) => setCurrPwd(e.target.value)}

                                            required
                                        />
                                    </div>
                                    <div className="input-groupmodel">
                                        <label>New Password</label>
                                        <input
                                            type="password"
                                            name="newPassword"
                                            autoComplete="new-password"
                                            value={newPwd}
                                            onChange={(e) => setNewPwd(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="input-groupmodel">
                                        <label>Confirm New Password</label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            autoComplete="new-password"
                                            value={confirmPwd}
                                            onChange={(e) => setConfirmPwd(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div><p style={{ color: "red" }}>{err}</p></div>
                                    <div className="modal-actions"
                                        style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                                        <button className="setting-btn"
                                            onClick={() => {
                                                setCurrPwd("")
                                                setNewPwd("")
                                                setConfirmPwd("")
                                                setErr("")
                                                setUpdatePwd(false)
                                            }}>
                                            Cancel
                                        </button>
                                        <button className="setting-btn" onClick={async () => {
                                            if (!currPwd || !newPwd || !confirmPwd) {
                                                setErr("Enter all details...")
                                            }
                                            else if (studentInfo.password === currPwd) {
                                                if (currPwd !== newPwd) {
                                                    if (newPwd === confirmPwd) {

                                                        const formData = { ...studentInfo, password: newPwd }

                                                        //update student password
                                                        await axios.put(`http://libraryserver-mu.vercel.app/api/updateStudent/${studentInfo._id}`,
                                                            formData)
                                                            .then((response) => {
                                                                setErr("")
                                                                toast.success("successfully updated Password");
                                                                setUpdatePwd(false)
                                                                setCurrPwd("")
                                                                setNewPwd("")
                                                                setConfirmPwd("")
                                                                window.location.reload()
                                                            })
                                                            .catch(error => { console.log("errr", error) })
                                                    }
                                                    else
                                                        setErr("Current password and New password are same.")
                                                }
                                                else
                                                    setErr("New Password and Confirm Password are not same")
                                            }
                                            else
                                                setErr("Please Enter correct current password..")

                                        }
                                        }>Update</button>
                                    </div>
                                </div>
                            </div>

                        )}

                        {deleteModel && (
                            <div className="modal-overlay">
                                <div className="modal-content">
                                    <h3>Are you sure You want to delete?</h3>
                                    <div className="modal-actions"
                                        style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                                        <button className="setting-btn" onClick={() =>
                                            setDeleteModel(false)}>Cancel</button>
                                        <button className="setting-btn delete-btn"
                                            onClick={async () => {

                                                //update student detail in book list
                                                books.map(async (book) => {
                                                    if (studentInfo.activeBorrows.includes(book.id)) {

                                                        const newArr = book.available.filter(item => item !== JSON.parse(localStorage.getItem("studentPersonalId")))
                                                        const formData = { ...books, available: newArr }

                                                        //update book list
                                                        await axios.put(`http://libraryserver-mu.vercel.app/api/update/${book._id}`, formData)
                                                            .then((response) => {
                                                                console.log("update book", response.data)
                                                            })
                                                            .catch(error => { console.log("errr", error) })
                                                    }

                                                })


                                                //delete borrowed book list of students
                                                borrowedBooks.map(async (item) => {
                                                    if (item.studentId === localStorage.getItem("studentId")) {
                                                        await axios.delete(`http://libraryserver-mu.vercel.app/api/deleteBook/${item._id}`)
                                                            .then((res) => { })
                                                            .catch(err => console.log(err))
                                                    }
                                                })

                                                //delete student detail
                                                await axios.delete(`http://libraryserver-mu.vercel.app/api/deleteStudent/${studentInfo._id}`)
                                                    .then((res) => {
                                                        navigate("/")
                                                    })
                                                    .catch(err => console.log(err))
                                            }}>
                                            Delete</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Profile