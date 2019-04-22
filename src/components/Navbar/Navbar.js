//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="itemLeft">Memory Game</li><br></br>
                    {/* <li className="itemCenter">{this.props.message}</li> */}
                    <li className="itemRight">Score: {this.props.score}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;