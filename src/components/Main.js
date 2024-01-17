import React from "react";
import { Link } from "react-router-dom";

export  function Main() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/general"> NewsRead </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-4">
              <Link className="nav-link" aria-current="page" to="/general"> Home </Link>
            </li>
            <li className="nav-item px-4">
              <Link className="nav-link" to="/science"> Science  </Link>
            </li>
            <li className="nav-item px-4">
              <Link className="nav-link" to="/entertainment"> Entertainment </Link>
            </li>
            <li className="nav-item px-4">
              <Link className="nav-link" to="/technology"> Technology </Link>
            </li>
            <li className="nav-item px-4">
              <Link className="nav-link" to="/sports"> Sports </Link>
            </li>
            <li className="nav-item px-4">
              <Link className="nav-link" to="/health"> Health </Link>
            </li>
            <li className="nav-item px-4">
              <Link className="nav-link" to="/business"> Business </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Main;
