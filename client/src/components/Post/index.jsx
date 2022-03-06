// Post Component
import React, { useState, useEffect } from "react";
import Comment from "../Comment"
import CommentForm from "../CommentForm"
import * as postService from "../../api/post.service";
import "./index.css"

//import { string } from "prop-types";


const Post = (props) => {
    const [coms, setComs] = useState([]); 


    const fetchComs = async () => {
        await postService.showPost().then((res) => {
            //console.log(res.data.data) 
            setComs(res.data.data);

        });
    };

    useEffect(() => {
        fetchComs();
    }, []);



	return (
		<>
        <div className="post-container">
           
            {/* <button onClick={props.deletePosts}>Delete</button> */}


			<h2 className="post-title">{props.title}</h2>
            <br />
                <img src = {`/uploads/postImages/${props.image}`} alt="" style= {{width: "100%"}}/>
				<br/>
                <p className="post-body">{props.body}</p>
                
                <br/>
                <br/>
                <br/>

                {/* <h3 className="comment-title">Comments:</h3> */}
                
            <CommentForm postId={props.postId} refreshcoms={() => fetchComs()} /> 
            <br/>
                {props.comment.map((comment) => {
                    return(
                        
                        <Comment
                            comment={comment.content}
                            id={comment._id}
                            fetchComs={fetchComs}
                        />
                    );
                })}
            <div className="button-div">
                <button className="loadmore">Load More</button>
            </div>
            
        </div>
		</>
	);
};

// Post.propTypes = {
// 	title: string.isRequired,
// 	author: string.isRequired,
// 	body: string.isRequired,
// };

// Post.defaultProps = {
// 	author: "Teri London",
// };

export default Post;