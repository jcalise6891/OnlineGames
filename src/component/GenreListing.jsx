import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class GenreListing extends Component{

    state={
        genre:[],
    }

    componentDidMount(){
        axios({
            url: "https://127.0.0.1:8000/genre",
            method: 'GET',
        })
            .then(response => {
                this.setState({genre: response.data});
            })
            .catch(err => {
                console.error(err);
            });
    }

    render(){

        const genre = this.state.genre;

        return(
            <div className="container my-5">
                <h1 className="text-center pb-5">Genre List</h1>
                <div className="col-4 offset-4 my-5">
                    <ul className=" list-unstyled">
                        {genre.map(genre =>(
                            <li className="my-2">
                                <Link to={`/genre/${genre.id}`}>
                                    {genre.name}
                                </Link>
                                <span className="float-right">
                                    {genre.number}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default GenreListing;
