import React from 'react';
import './css/style.css';

import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import GameListing from './component/GameListing';
import Game from './component/Game';


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
                            imgUrl: "MonsterHunterCover.jpg",
                            description:"Monster Hunter: World[a] is an action role-playing game developed" +
                                " and published by Capcom. A part of the Monster Hunter series, it was released" +
                                " worldwide for PlayStation 4 and Xbox One in January 2018, with a Microsoft Windows" +
                                " version following in August 2018.\n In the game, the player takes the role" +
                                " of a Hunter, tasked to hunt down and either kill or trap monsters that roam in" +
                                " one of several environmental spaces. If successful, the player is rewarded through" +
                                " loot consisting of parts from the monster and other elements that are used to craft" +
                                " weapons and armor, amongst other equipment. The game's core loop has the player" +
                                " crafting appropriate gear to be able to hunt down more difficult monsters, which" +
                                " in turn provide parts that lead to more powerful gear. Players may hunt alone" +
                                " or in a group of up to four players via the game's online multiplayer.\n"
                        },
                        {
                            id: 2,
                            name: "Final Fantasy VII Remake",
                            releaseDate: "02/03/2020",
                            genre: "RPG",
                            developer: "Square Enix Business Division 1",
                            imgUrl: "FinalFantasyVIIRemake.jpg",
                            description:"Final Fantasy VII Remake[a] is a 2020 action role-playing game" +
                                " developed and published by Square Enix.\n It is the first in a planned" +
                                " series of games remaking the 1997 PlayStation game Final Fantasy VII." +
                                " Set in the dystopian cyberpunk metropolis of Midgar, it puts players" +
                                " in the role of a mercenary named Cloud Strife. He joins AVALANCHE," +
                                " an eco-terrorist group trying to stop the powerful megacorporation Shinra" +
                                " from using the planet's life essence as an energy source.\n The gameplay combines" +
                                " real-time action with strategic and role-playing elements."
                        }
                    ]
                }
            ));
        } else {
            localStorage.clear();
            this.initList();
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
                <Switch>
                    <Route path="/" exact component={GameListing}>
                        <div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 my-5 pb-5 text-center">
                                        <h1>Online Games</h1>

                                    </div>
                                </div>
                                <div className="row">
                                    {gamesList.games.map(game =>(
                                        <GameListing details={game} />
                                    ))}
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


