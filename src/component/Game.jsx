import React from "react";
import App from "../App";
import "../css/style.css"



function game({match}) {
    let gameList = new App();
    let gameID = null;

    gameList.getList().games.forEach(game => {
        if(game.name.replace(/\s/g,'') === match.params.id){
            gameID = game;
        }
    });



    return (
        <div className="card mb-3 mt-5">
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
                            <li className="list-group-item">{gameID.description.split('\n')
                                .map(i =>{
                                    return <p>{i}</p>
                                })}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default game;