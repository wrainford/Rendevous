// Post Component
import React, { useState } from "react";
import * as postService from "../../api/post.service";

//import { string } from "prop-types";



const Post = (props) => {

	// console.log(props.comment[0].content)
	return (
		<>
			<h1>Title: {props.title}</h1>
			<div>
                <img src = {`/uploads/postImages/${props.image}`} alt="..." style= {{width: "60%"}}/>
				<p>{props.body}</p>
					{props.comment.map((comment) => {
					return (
						<h4>comment: {comment.content}</h4>
					)
					})}
		
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