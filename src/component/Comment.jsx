import React, {Component} from "react";
import {Form, ListGroup} from "react-bootstrap";
import axios from "axios";

class Comment extends Component
{
    state= {
        newComment:'',
        comments: []
    };

    componentDidMount() {
        axios({
            url: "https://127.0.0.1:8000/game/"+this.getLastItem(window.location.href.toString())+"/comment",
            method: 'GET',
        })
            .then(response => {
                this.setState({comments: response.data});
            })
            .catch(err => {
                console.error(err);
            });
    }

    getLastItem = (thePath) => {
        return thePath.substring(thePath.lastIndexOf('/') + 1)
    }

    setComment = (event) => {
        event.preventDefault();

        const id = new Date().getTime();
        const content = this.state.newComment;
        const comment = {id, content};

        let data = new FormData();
        data.append('id', comment.id.toString())
        data.append('content', comment.content)



        axios({
            url: "https://127.0.0.1:8000/game/" + this.getLastItem(window.location.href.toString()) + "/comment",
            method: 'POST',
            header:{
              'Content-Type':'Application/json'
            },
            data: data
        })
            .then(response => {
                let commentList = this.state.comments
                commentList.push(response.data)
                this.setState({comments:commentList});
                console.log(this.state.comments);
            })
            .catch(err => {
                console.error(err);
            });

        this.setState({newComment:''});

    }

   handleChange = (event) =>{
        const value = event.currentTarget.value;
        this.setState({newComment:value});
   }

   handleDelete = (id) =>{


       axios({
           url: "https://127.0.0.1:8000/game/" + this.getLastItem(window.location.href.toString()) + "/comment?IDComment="+id,
           method: 'DELETE'
       })
           .then(response => {
               let commentList = this.state.comments;
               let removeIndex = commentList.map(function(item) { return item.id; }).indexOf(response.data)
               commentList.splice(removeIndex,1);
               console.log(commentList);
               this.setState({comments:commentList});
           })
           .catch(err => {
               console.error(err);
           });
   }


    render = () =>{

        return(
            <div className="col-md-12" id="commentList">
            <div id="comment">
                {this.state.comments.map(comment =>{
                    return(
                        <ListGroup.Item
                            className="d-flex my-1 justify-content-between align-items-center"
                            variant="secondary">
                                <p>{comment.content}</p>
                                <button
                                    className="text-danger btn-outline-dark btn"
                                    onClick={() => this.handleDelete(comment.id)}
                                >X</button>
                        </ListGroup.Item>
                    )
                })}
            </div>
            <form onSubmit={this.setComment}>
                <Form.Control
                    value={this.state.newComment}
                    onChange={this.handleChange}
                    as="textarea"
                    rows="2"
                    placeholder="Add a Comment"
                />
                <button className="btn btn-dark mt-2">Confirm</button>
            </form>
            </div>
        )
    }
}

export default Comment;