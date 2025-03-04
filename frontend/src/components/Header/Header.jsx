import React from "react";

import { Link } from 'react-router-dom';


const Header = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <Link class="navbar-brand" to="/">Contest Platform</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/contests">Contests</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/problem">Problems</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/createProblem">Create Problem</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/createcontest">Create Contest</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/compiler">Compiler</Link>
                </li>
            </ul>
            <div class="mx-5" >
                {/* <button type="submit" action="/login"  class="btn btn-secondary mr-4">LogIn</button> */}
                <Link class="btn btn-secondary px-3" to="/signin" role="button">SignIn</Link>
            </div>
            </div>
        </div>
        </nav>

    );
}

export default Header;