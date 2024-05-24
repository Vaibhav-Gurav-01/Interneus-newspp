import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";



export default class Navbar extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }



    render() {
        return (
            <>
                <div  >
                    <nav className="navbar navbar-expand-lg bg-secondary  shadow" >
                        <div className="container-fluid">

                            <Link className="navbar-brand border border-primary rounded  p-1 border-opacity-50 bg-light" to="/" >
                                <img src="/interneus.png" alt="INTERNEUS" width="auto" height="35" />{/*Interneus*/}</Link>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0  nav-underline">
                                    <li className="nav-item ">
                                        <Link className="nav-link text-light fw-bold " aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light  " to="/business">Business</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light  " to="/entertainment">Entertainment</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light  " to="/health">Health</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light  " to="/science">Science</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light  " to="/sports">Sports</Link>
                                    </li >
                                    <li className="nav-item">
                                        <Link className="nav-link text-light  " to="/technology">Technology</Link>
                                    </li >
                                </ul >



                            </div >
                        </div >
                    </nav >
                </div >
            </>
        )
    }
}
