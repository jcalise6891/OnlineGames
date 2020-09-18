import React, {Component} from "react";
import {Link} from "react-router-dom";
import SortBar from "./SortBar";
import axios from "axios";

class GameListing extends Component {

    state = {
        games:[]
    }


    componentDidMount() {
        axios({
            url: "https://127.0.0.1:8000/game",
            method: 'GET',
        })
            .then(response => {
                this.setState({games: response.data});
            })
            .catch(err => {
                console.error(err);
            });
    }

    rendList(){
       return (
           this.state.games.map(game =>(
            <div className="col-md-6 col-12 my-4 justify-content-center">
                <div className="card">
                    <img className="card-img-top align-self-center" src={`./img/${game.img}`}
                         alt="GameImage"/>
                    <div className="card-body text-center">
                        <h5 className="card-title ">{game.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item">Release Date :
                            <span>{`${game.releasedAt}`.replace(/-/g,'/')}</span></li>
                        <li className="list-group-item">Genre :
                            <span>{game.genre}</span></li>
                        <li className="list-group-item">Developer :
                            <span>{game.studio.name}</span></li>
                    </ul>
                    <div className="card-body text-center">
                        <Link to={`game/${game.id}`.replace(/\s/g, '')}>
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
