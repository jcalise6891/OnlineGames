import axios from "axios";
import {Link} from "react-router-dom";
import SortBar from "./SortBar";
import React, {Component} from "react";

class GameListingFromGenre extends Component{

    state= {
        games:[],
        genre:[{}]
    }

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this)
    }

    getGenreID(){
        return this.props.match.params.id;
    }

    componentDidMount() {
        axios({
            url: "https://127.0.0.1:8000/genre/"+this.getGenreID(),
            method: 'GET',
        })
            .then(response => {
                this.setState({games: response.data});
            })
            .catch(err => {
                console.error(err);
            });
    }

    handler(state){
        this.setState({games:state})
    }

    rendList(){
        return (
            this.state.games.map(game =>(
                <div className="col-md-6 col-12 my-4 justify-content-center">
                    <div className="card">
                        <img className="card-img-top align-self-center" src={`/img/${game.img}`}
                             alt="GameImage"/>
                        <div className="card-body text-center">
                            <h5 className="card-title ">{game.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush ">
                            <li className="list-group-item">Release Date :
                                <span>{`${game.releasedAt}`.replace(/-/g,'/')}</span></li>
                            <li className="list-group-item">Genre :
                                <span>
                                    {
                                        game.genre.map((genre,i,arr) => {
                                                if(arr.length - 1 === i) {
                                                    return <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
                                                } else {
                                                    return <Link to={`/genre/${genre.id}`}>{`${genre.name}, `}</Link>
                                                }
                                            }
                                        )}
                                </span>
                            </li>
                            <li className="list-group-item">Developer :
                                <span>{game.studio.name}</span></li>
                        </ul>
                        <div className="card-body text-center">
                            <Link to={`/game/${game.id}`.replace(/\s/g, '')}>
                                More Information
                            </Link>
                        </div>
                    </div>
                </div>
            )));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.id !== this.props.match.params.id){
            axios({
                url: "https://127.0.0.1:8000/genre/"+this.getGenreID(),
                method: 'GET',
            })
                .then(response => {
                    this.setState({games: response.data});
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <SortBar {...this.state} handler={this.handler}/>
                </div>
                <div className="row">
                    {this.rendList()}
                </div>
            </div>
        )
    }
}

export default GameListingFromGenre;