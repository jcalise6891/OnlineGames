import React, {Component} from "react";
import axios from "axios";
import Studio from "./Studio";
import Comment from "./Comment";
import {Link} from "react-router-dom";



class Game extends Component
{

    state = {
        games:[],
        comment:[],
        studio:{},
        genre:[{}]
    }

    getGame(){
        return this.props.match.params.id;
    }


    componentDidMount() {

        const game = this.getGame()

        axios({
            url: "https://127.0.0.1:8000/game/"+game,
            method: 'GET',
        })
            .then(response => {
                this.setState({games: response.data, studio: response.data.studio, genre:response.data.genre});
            })
            .catch(err => {
                console.error(err);
            });
    }

    render(){
        const game = this.state.games;
        const studio = this.state.studio;
        const genre = this.state.genre;

        return (
            <div className="container">
                <Studio studio={this.state.games.studio}/>
                <div className="card my-5">
                    <div className="row no-gutters">
                        <div className="col-md-3 d-flex align-items-center">
                            <img src={`./../img/${game.img}`} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{game.name}</h5>
                                <ul className="list-group list-group-flush ">
                                    <li className="list-group-item">Release Date :
                                        <span>{`${game.releasedAt}`.replace(/-/g,'/')}</span>
                                    </li>
                                    <li className="list-group-item">Genre :
                                        <span>
                                        {genre.map((genre,i,arr) => {
                                                    if(arr.length - 1 === i) {
                                                        return <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
                                                    } else {
                                                        return <Link to={`/genre/${genre.id}`}>{`${genre.name}, `}</Link>
                                                    }
                                                }
                                            )}
                                    </span>
                                    </li>
                                    <li className="list-group-item">Developer : <span>{studio.name}</span></li>
                                    <li className="list-group-item">{game.description}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Comment/>
                </div>
            </div>
        );
    }
}

export default Game;