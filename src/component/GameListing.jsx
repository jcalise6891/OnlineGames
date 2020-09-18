import React, {Component} from "react";
import {Link} from "react-router-dom";
import SortBar from "./SortBar";
import ComponentDidMount from "./og-api";

class GameListing extends Component {

    initList(){
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
                    },
                    {
                        id: 3,
                        name: "World Of Warcraft",
                        releaseDate: "23/11/2004",
                        genre: "MMORPG",
                        developer: "Blizzard Entertainment",
                        imgUrl: "WorldOfWarcraft.jpg"
                    }
                ]
            }
        ));
    }


    getList(){
        return JSON.parse(localStorage.getItem('Games'));
    }

    rendList(){
        this.initList()
        let gamesList = this.getList();



       return (
           gamesList.games.map(game =>(
            <div className="col-md-6 col-12 my-4 justify-content-center">
                <div className="card">
                    <img className="card-img-top align-self-center" src={`./img/${game.imgUrl}`}
                         alt="GameImage"/>
                    <div className="card-body text-center">
                        <h5 className="card-title ">{game.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item">Release Date : <span>{game.releaseDate}</span></li>
                        <li className="list-group-item">Genre : <span>{game.genre}</span></li>
                        <li className="list-group-item">Developer : <span>{game.developer}</span></li>
                    </ul>
                    <div className="card-body text-center">
                        <Link to={`game/${game.name}`.replace(/\s/g, '')}>
                            More Information
                        </Link>
                    </div>
                </div>
            </div>
        )));
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <SortBar/>
                </div>
                <div className="row">
                    {this.rendList()}
                </div>
            </div>
        )
    }
}

export default GameListing;
