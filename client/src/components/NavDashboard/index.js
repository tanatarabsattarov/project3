import React from "react";
import "./style.css";
function NavDashboard() {

    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="file"></span>
                            Menu
                </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="file"></span>
                            Add or Edit menu
                </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="file"></span>
                            Categories
                </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="file"></span>
                            Tables
                </a>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Account info</span>
                    <a className="d-flex align-items-center text-muted" href="/">
                        <span data-feather="plus-circle"></span>
                    </a>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="file-text"></span>
                            Profile
                </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="file-text"></span>
                            Reports
                </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavDashboard;
