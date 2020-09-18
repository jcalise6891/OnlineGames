import React, {Component} from "react";
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";




class NavbarOG extends Component{

    render(){
        return(
            <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
                <Link to="/">
                <Navbar.Brand>Online Games</Navbar.Brand>
                </Link>
            </Navbar>
        )
    }
}

export default NavbarOG;