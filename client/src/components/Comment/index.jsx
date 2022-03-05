// Post Component
import React, { useState } from "react";
import * as postService from "../../api/post.service";
import DelComment from "../DeleteComment";
import EditComment from "../EditComment";
import "./index.css"

const Comment = (props) => {
	return (
		<>
			<div className="comment-container">
				<h4>comment: {props.comment} </h4>
				<EditComment commentId={props.commentId}/>
				<DelComment commentId={props.commentId} fetchComs={props.fetchComs}/>
				
			</div>
		</>
	);
};

export default Comment;