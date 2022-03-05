// Post Component
import React, { useState } from "react";
import * as postService from "../../api/post.service";
import "./index.css"

const Comment = (props) => {
	return (
		<>
			<div className="comment-container">
				<h4>comment: {props.comment} </h4>
			</div>
		</>
	);
};

export default Comment;