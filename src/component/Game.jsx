import React from "react";
import App from "../App";
import gameDescription from '../json/gameDescription.json';
import Comment from "./Comment";



function game({match}) {

    let gameList = new App();
    let gameID = null;
    let description = null;

    gameList.getList().games.forEach(game => {
        if(game.name.replace(/\s/g,'') === match.params.id){
            gameID = game;
            description = gameDescription[game.name.replace(/\s/g,'')].description;
        }
    });

    return (
        <div className="container">
            <div className="card my-5">
                <div className="row no-gutters">
                    <div className="col-md-3 d-flex align-items-center">
                        <img src={`./../img/${gameID.imgUrl}`} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{gameID.name}</h5>
                            <ul className="list-group list-group-flush ">
                                <li className="list-group-item">Release Date : <span>{gameID.releaseDate}</span></li>
                                <li className="list-group-item">Genre : <span>{gameID.genre}</span></li>
                                <li className="list-group-item">Developer : <span>{gameID.developer}</span></li>
                                <li className="list-group-item">{description.split('\n')
                                    .map(i =>{
                                        return <p>{i}</p>
                                    })}</li>
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

export default game;