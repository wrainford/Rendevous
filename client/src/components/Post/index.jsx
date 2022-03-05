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
            <h3>Post Component</h3>
            <button onClick={props.deletePosts}>Delete</button>


			<h1>Title: {props.title}</h1>
			
                Image:
                <img src = {`/uploads/postImages/${props.image}`} alt="..." style= {{width: "80%"}}/>
				<p>Body: {props.body}</p>
                <p> ID: {props.id} </p>
                
            <CommentForm refreshcoms={() => fetchComs()} /> 
                {props.comment.map((comment) => {
                    return(
                        <Comment
                            comment={comment.content}
                            key={comment._id}
                        />
                    );
                })}
            <p>Load More</p>
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