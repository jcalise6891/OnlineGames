import React from "react";
import {Link} from "react-router-dom";

    const GameListing = ({details}) => {
        return(
            <div className="col-md-6 col-12 my-4 justify-content-center">
                <div className="card" >
                    <img className="card-img-top align-self-center" src={`./img/${details.imgUrl}`} alt="GameImage"/>
                    <div className="card-body text-center">
                        <h5 className="card-title ">{details.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item">Release Date : <span>{details.releaseDate}</span></li>
                        <li className="list-group-item">Genre : <span>{details.genre}</span></li>
                        <li className="list-group-item">Developer : <span>{details.developer}</span></li>
                    </ul>
                    <div className="card-body text-center">
                        <Link to={`game/${details.name}`.replace(/\s/g,'')}>
                            More Information
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

export default GameListing;
