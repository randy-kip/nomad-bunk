// import React from 'react';
import { Link } from 'react-router-dom'; // Use this if you're using React Router

const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <div className="logo me-auto">
          <h1><Link to="/">Delicious</Link></h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <Link to="/"><img src="assets/img/logo.png" alt="" className="img-fluid" /></Link> */}
        </div>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><Link className="nav-link scrollto active" to="#hero">Home</Link></li>
            <li><Link className="nav-link scrollto" to="#about">About</Link></li>
            <li><Link className="nav-link scrollto" to="#menu">Menu</Link></li>
            <li><Link className="nav-link scrollto" to="#specials">Specials</Link></li>
            <li><Link className="nav-link scrollto" to="#events">Events</Link></li>
            <li><Link className="nav-link scrollto" to="#chefs">Chefs</Link></li>
            <li><Link className="nav-link scrollto" to="#gallery">Gallery</Link></li>
            <li className="dropdown">
              <Link to="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li><Link to="#">Drop Down 1</Link></li>
                <li className="dropdown">
                  <Link to="#">
                    <span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i>
                  </Link>
                  <ul>
                    <li><Link to="#">Deep Drop Down 1</Link></li>
                    <li><Link to="#">Deep Drop Down 2</Link></li>
                    <li><Link to="#">Deep Drop Down 3</Link></li>
                    <li><Link to="#">Deep Drop Down 4</Link></li>
                    <li><Link to="#">Deep Drop Down 5</Link></li>
                  </ul>
                </li>
                <li><Link to="#">Drop Down 2</Link></li>
                <li><Link to="#">Drop Down 3</Link></li>
                <li><Link to="#">Drop Down 4</Link></li>
              </ul>
            </li>
            <li><Link className="nav-link scrollto" to="#contact">Contact</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>{/* .navbar */}

        <Link to="#book-a-table" className="book-a-table-btn scrollto">Book a table</Link>

      </div>
    </header>
  );
};

export default Header;
