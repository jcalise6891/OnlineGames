import React from 'react';
import './css/style.css';

import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import NavbarOG from "./component/Navbar";
import GameListing from './component/GameListing';
import Game from './component/Game';

import ApiTest from './component/ApicalipseTest';


class App extends React.Component
{
   initList(){
        if(!this.getList()) {
            localStorage.setItem('Games', JSON.stringify(
                {
                    games: [
                        {
                            id: 1,
                            name: "Monster Hunter World",
                            releaseDate: "22/12/2017",
                            genre: "RPG",
                            developer: "Capcom",
                            imgUrl: "MonsterHunterCover.jpg"
                        },
                        {
                            id: 2,
                            name: "Final Fantasy VII Remake",
                            releaseDate: "02/03/2020",
                            genre: "RPG",
                            developer: "Square Enix Business Division 1",
                            imgUrl: "FinalFantasyVIIRemake.jpg"
                        }
                    ]
                }
            ));
        }
    }

     getList(){
        return JSON.parse(localStorage.getItem('Games'));
    }

    render(){
        this.initList()
        let gamesList = this.getList();
        return(

            <Router>
                <NavbarOG/>
                <Switch>
                    <Route path="/" exact component={GameListing}>
                        <div>
                            <div className="container my-5 pt-5">
                                <div className="row">
                                    {gamesList.games.map(game =>(
                                        <GameListing details={game} />
                                    ))}
                                    <ApiTest/>
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route path="/game/:id" component={Game}/>
                </Switch>
            </Router>
        );
    }
}

export default App;


