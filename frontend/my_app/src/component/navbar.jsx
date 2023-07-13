import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    let data = JSON.parse(localStorage.getItem('user_detail'))

    const handleLogOut = () => {
        localStorage.removeItem('user_detail')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-lignt border border-bottom bg">
                <div className="container-fluid">
                    < Link className="navbar-brand fs-4 text-white mx-5" to="/">HOME</Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon icon-white"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-5 collapse-div" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            {
                                data?.token ?

                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link active mx-3 border border-success text-white bg-success opacity-3" aria-current="page" to="/task">Create Task</Link>
                                        </li>
                                        {
                                            data?.Role === "User" &&
                                            <li className="nav-item">
                                                < Link className="nav-link active mx-3 border border-success text-white bg-success opacity-3" aria-current="page" to="/user">User Dashboard</Link>
                                            </li>
                                        }

                                        {
                                            data?.Role === "Admin" &&
                                            <li className="nav-item">
                                                <  Link className="nav-link active mx-3 border border-success text-white bg-success opacity-3" aria-current="page" to="/admin">Admin Dashboard</Link>
                                            </li>
                                        }
                                        <li className="nav-item">
                                            < Link className="nav-link active mx-3 border border-success text-white bg-success opacity-3" onClick={handleLogOut} aria-current="page" to="/login">Log Out</Link>
                                        </li>

                                    </>
                                    :
                                    <li className="nav-item">
                                        < Link className="nav-link active mx-3 border border-success text-white bg-success opacity-3" aria-current="page" to="/login">Log In</Link>
                                    </li>

                            }



                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar