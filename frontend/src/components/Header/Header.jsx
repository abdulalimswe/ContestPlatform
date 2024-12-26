import React from "react";


const Header = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Contest Platform</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/profile">Profile</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/problem">Problem</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/createProblem">Create Problem</a>
                </li>
            </ul>
            <div class="mx-5" >
                {/* <button type="submit" action="/login"  class="btn btn-secondary mr-4">LogIn</button> */}
                <a class="btn btn-secondary px-3" href="/login" role="button">LogIn</a>
            </div>
            </div>
        </div>
        </nav>

    );
}

export default Header;