import React, {Component} from "react";

class SortBar extends Component{


    state={
        games:[]
    };

    constructor(props) {
        super(props);
        this.handleClickAC = this.handleClickAC.bind(this);
        this.handleClickAD = this.handleClickAD.bind(this);
        this.handleClickDC = this.handleClickDC.bind(this);
        this.handleClickDD = this.handleClickDD.bind(this);

        this.handleClickReset = this.handleClickReset.bind(this);
    }

    handleClickAC(){
        const gameList = this.props.games
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
        this.props.handler(sortedGL);
    }

    handleClickAD(){
        const gameList = this.props.games
        let sortedGL = gameList.sort(
            function (a,b){
                let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                if(nameA > nameB){
                    return -1;
                }
                if(nameA < nameB){
                    return 1;
                }
                return 0;
            })
        this.props.handler(sortedGL);
    }

    handleClickDC(){

        const gameList = this.props.games;

        function dateToNum(d) {
                d = d.split("/");
                return Number(d[2]+d[1]+d[0]);
        }

        let sortedGL = gameList.sort(
            function(a,b){
                let dateA = dateToNum(a.releasedAt), dateB = dateToNum(b.releasedAt)
                if(dateA < dateB){
                    return -1;
                }
                if(dateA > dateB){
                    return 1;
                }
                return 0;
            })
        this.props.handler(sortedGL);
    }

    handleClickDD(){

        const gameList = this.props.games;

        function dateToNum(d) {
            d = d.split("/");
            return Number(d[2]+d[1]+d[0]);
        }

        let sortedGL = gameList.sort(
            function(a,b){
                let dateA = dateToNum(a.releasedAt), dateB = dateToNum(b.releasedAt)
                if(dateA < dateB){
                    return -1;
                }
                if(dateA > dateB){
                    return 1;
                }
                return 0;
            })
        sortedGL.reverse()
        this.props.handler(sortedGL);
    }


    handleClickReset(){
        const gameList = this.props.games
        let unSortedGL = gameList.sort((a,b) => a.id - b.id);
        this.props.handler(unSortedGL);
    }


    render(){
        return(
            <div className="row">
                <div id ="sort-bar" className="col-md-12 col-12 my-5 ">
                    <ul>
                        <li><button onClick={this.handleClickAC} className="btn btn-outline-primary">Alphabétique croissant</button></li>
                        <li><button onClick={this.handleClickAD} className="btn btn-outline-primary">Alphabétique décroissant</button></li>
                        <li><button onClick={this.handleClickDC} className="btn btn-outline-primary">Date de sortie croissant</button></li>
                        <li><button onClick={this.handleClickDD} className="btn btn-outline-primary">Date de sortie décroissant</button></li>
                        <li><button onClick={this.handleClickReset} className="btn btn-outline-danger">Reset</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SortBar;