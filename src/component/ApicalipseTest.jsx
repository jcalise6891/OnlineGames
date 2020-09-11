import React,{Component, useEffect} from "react";
import axios from "axios"



class ApiTest extends Component{

    // Example() {
    //     useEffect(() => {
    //         const fetchData = async () => {
    //                 axios({
    //                     url: "https://proxy.herokuapp.com/https://api-v3.igdb.com/games",
    //                     method: 'POST',
    //                     headers: {
    //                         'Accept': 'application/json',
    //                         'user-key': '0e120a2d3b08f79597cf62c45dfd597d'
    //                     },
    //                     data: "name;limit 10"
    //                 })
    //                     .then(response => {
    //                         console.log(response.data);
    //                     })
    //                     .catch(err => {
    //                         console.error(err);
    //                     });
    //             }
    //
    //         ;
    //     });
    // }

    componentDidMount() {

        // const fetchData = async () => {
            axios({
                url: "https://cors-anywhere.herokuapp.com/api-v3.igdb.com/games/",
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'user-key': '0e120a2d3b08f79597cf62c45dfd597d',
                    "Access-Control-Allow-Origin": "*",
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                    "Access-Control-Allow-Headers":"x-access-token, Origin, X-Requested-With, Content-Type, Accept",
                },
                data:"fields;"
            })
                .then(response => {
                    console.log('oui')
                    console.log(response.data);
                })
                .catch(err => {
                    console.error(err);
                });
        // }
    }

    render= () =>
    {
        return (
            <p>Oui</p>
        )
    }

}

export default ApiTest;

