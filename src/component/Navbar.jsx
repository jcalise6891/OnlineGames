import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import Switch from '@material-ui/core/Switch'





class NavbarOG extends Component{


    state = {
        toggleTheme: localStorage.getItem('theme'),
        themeToggler: false,
    }

    switchTheme(e){
        if(e.target.checked){
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme','dark');

        } else {
            document.documentElement.setAttribute('data-theme','light');
            localStorage.setItem('theme', 'light');
        }
    }




    render(){

        return(
            <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
                <Link to="/">
                <Navbar.Brand>Online Games</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                        <Nav.Link href="/genre/">Genre</Nav.Link>
                </Nav>
                <Switch
                    onChange={this.switchTheme}
                    color="primary"
                    name="ThemeToggler"
                    inputProps={{'aria-label':'secondary checkbox'}}
                    />
            </Navbar>
        )
    }
}

export default NavbarOG;