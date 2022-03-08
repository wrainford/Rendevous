// Post Component
import React, { useState, useEffect } from "react";
import Comment from "../Comment"
import CommentForm from "../CommentForm"
import * as postService from "../../api/post.service";
import "./index.css"

//import { string } from "prop-types";


const Post = (props) => {
    
    // const [coms, setComs] = useState([]); 
    // const fetchComs = async () => {
    //     await postService.showPost().then((res) => {
    //         // setComs(res.data.data);
    //     });
    // };
    // useEffect(() => {
    //     fetchComs();
       
    // }, []);

	return (
		<>
        <div className="post-container">
    
			<h2 className="post-title">{props.title}</h2>
            <br />
                <img src = {`/uploads/postImages/${props.image}`} alt="" style= {{width: "100%"}}/>
				<br/>
                <p className="post-body">{props.body}</p>
                
        
                {/* <h3 className="comment-title">Comments:</h3> */}
            <div className="comment-box">  
            <CommentForm postId={props.postId} refreshPosts={props.refreshPosts} /> 
                {props.comment.map((comment) => {
                    return(
                        
                        <Comment
                            comment={comment.content}
                            id={comment._id}
                            refreshPosts={props.refreshPosts}
                        />
                    );
                })}
            </div>  
            {/* <div className="button-div">
                <button className="loadmore">Load More</button>
            </div> */}
            
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