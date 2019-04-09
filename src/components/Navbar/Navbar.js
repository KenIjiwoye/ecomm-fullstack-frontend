import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <Link to='/' className="navbar-brand">BMW Shop</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to='/' className="nav-link" href="#">Home
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link to='/product' className="nav-link" href="#">Single Product</Link>
                  </li> */}
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li> */}
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}