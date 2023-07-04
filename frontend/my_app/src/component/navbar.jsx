import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-light bg-lignt border border-bottom bg">
                <div class="container-fluid">
                    <a class="navbar-brand fs-4 text-white mx-5" href="/">HOME</a>
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon icon-white"></span>
                    </button>
                    <div class="collapse navbar-collapse mx-5 collapse-div" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                                <a class="nav-link active mx-3 border border-success text-white bg-success opacity-3" aria-current="page" href="/task">Create Task</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active mx-3 border border-success text-white bg-success opacity-3" aria-current="page" href="/user/login">User Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-3 border border-success text-white bg-success opacity-3" href="/admin/login">Admin Login</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar