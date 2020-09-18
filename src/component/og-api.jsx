import React,{Component} from "react";
import axios from "axios"



class ApiTest extends Component{

    state= {
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

    render= () =>
    {

        return (
            <div>
                {this.state.games.map( game =>{
                    return(
                    <p>{game.name}</p>
                    )
                })}
            </div>

        )
    }

}

export default ApiTest;

