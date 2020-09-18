import React from 'react';
import './css/style.css';

import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import NavbarOG from "./component/Navbar";
import GameListing from './component/GameListing';
import Game from './component/Game';
import ApiTest from "./component/og-api";

class App extends React.Component {

    render() {


        return (
            <Router>
                <NavbarOG/>
                <Switch>
                    <Route path="/" exact component={GameListing}/>
                    <Route path="/game/:id" component={Game}/>
                    <Route path="/apiTest" exact component={ApiTest}/>
                </Switch>
            </Router>
        );
    }
}

export default App;


