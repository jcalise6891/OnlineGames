import React, {Component} from "react";
import {Form, ListGroup} from "react-bootstrap";

class Comment extends Component
{
    state= {
        newComment:'',
        comments: this.getComments().comments
    };

    initComment(){
        if(!this.getComments()){
            localStorage.setItem('Comments',JSON.stringify(
                {
                    comments:[
                        {
                            id:1,
                            name:"FinalFantasyVIIRemake",
                            text:"Seems like a cool game"
                        },
                        {
                            id:2,
                            name:"MonsterHunterWorld",
                            text:"Well too overrated tbh"
                        },
                        {
                            id:3,
                            name:"FinalFantasyVIIRemake",
                            text:"Great remake"
                        }
                    ]
                }
            ))
        }
    }

    getLastItem = (thePath) => {
        return thePath.substring(thePath.lastIndexOf('/') + 1)
    }

    setComment = (event) =>{
        event.preventDefault();
        const id = new Date().getTime();
        const text = this.state.newComment;
        const name = this.getLastItem(window.location.href.toString());
        const comment = {id,name,text}
        const listComment = this.getComments();

        listComment.comments.push(comment);
        localStorage.setItem('Comments',JSON.stringify(listComment));
        this.setState({comments:listComment, newComment:''});
    }

    getComments(){
        return JSON.parse(localStorage.getItem('Comments'));
    }

   handleChange = (event) =>{
        const value = event.currentTarget.value;
        this.setState({newComment:value});
   }

   handleDelete = (id) =>{

        const listComment = this.getComments();
        let pos = null;

        this.getComments().comments.forEach( comment =>{
            if(comment.id === id){
                pos = this.getComments().comments.map(function (e){return e.id}).indexOf(id);

            }
        });

        listComment.comments.splice(pos,1);
        localStorage.setItem('Comments',JSON.stringify(listComment));
        console.log(listComment)
        this.setState({comments:listComment});


   }


    render = () =>{
        this.initComment();
        let commentList = this.getComments();
        let comments = [];

        commentList.comments.forEach( comment => {
            if (comment.name === this.getLastItem(window.location.href.toString()) ) {
                comments.push(comment);
            }
        })

        return(
            <div className="col-md-12" id="commentList">
            <div id="comment">
                {comments.map(comment =>{
                    return(
                        <ListGroup.Item
                            className="d-flex my-1 justify-content-between align-items-center"
                            variant="secondary">
                                <p>{comment.text}</p>
                                <button
                                    className="text-danger btn-outline-dark btn"
                                    onClick={() => this.handleDelete(comment.id)}
                                >X</button>
                        </ListGroup.Item>
                    )
                })}
            </div>
            <form onSubmit={this.setComment}>
                <Form.Control value={this.state.newComment} onChange={this.handleChange}
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