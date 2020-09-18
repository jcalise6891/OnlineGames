import React, {Component} from "react";
import axios from "axios";
import Studio from "./Studio";



class Game extends Component
{

    state = {
        games:[],
        comment:[]
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
                this.setState({games: response.data});
            })
            .catch(err => {
                console.error(err);
            });
    }

    render(){
        const game = this.state.games;
        setTimeout(function(){
            console.log(game.studio.name);
        },10000);



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
                                    <li className="list-group-item">Release Date : <span>{game.releasedAt}</span>
                                    </li>
                                    <li className="list-group-item">Genre : <span>{game.genre}</span></li>
                                    <li className="list-group-item">Developer : <span></span></li>
                                    <li className="list-group-item">{game.description}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/*<Comment/>*/}
                </div>
            </div>
        );
    }
}

export default Game;