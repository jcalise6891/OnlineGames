import React, {Component} from "react";
import GameListing from "./GameListing";

class SortBar extends Component{


    state={
        games: 'pou'
    };


    handleClickAC(){
        let gameListClass = new GameListing();
        let gameList = gameListClass.getList().games;
        let sortedGL = gameList.sort(
            function (a,b){
                let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                if(nameA < nameB){
                    return -1;
                }
                if(nameA > nameB){
                    return 1;
                }
                return 0;
        })
        console.log(sortedGL);
    }





    render(){
        return(
            <div className="row">
                <div id ="sort-bar" className="col-md-12 col-12 my-5 ">
                    <ul>
                        <li><button onClick={this.handleClickAC} className="btn btn-outline-primary">Alphabétique croissant</button></li>
                        <li><button className="btn btn-outline-primary">Alphabétique décroissant</button></li>
                        <li><button className="btn btn-outline-primary">Date de sortie croissant</button></li>
                        <li><button className="btn btn-outline-primary">Date de sortie décroissant</button></li>
                        <li><button className="btn btn-outline-danger">Reset</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SortBar;