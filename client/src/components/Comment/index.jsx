// Post Component
import React from "react";
import * as postService from "../../api/post.service";
import DelComment from "../DeleteComment";
import EditComment from "../EditComment";
import "./index.css"
import {BsPersonCircle} from "react-icons/bs"


const Comment = (props) => {
	
	return (
		<>
		<div className="com-div">
			<div className="grid1">
				<BsPersonCircle size={30} />
			</div>

			<div className="comment-container">
				<div className="com-edit-side">
				<div className="comment-buttons">
				<EditComment commentId={props.id} body={props.comment}/>
				<DelComment commentId={props.id} refreshPosts={props.refreshPosts}/>
				</div>
				<h4 className="h4-comment-text"> {props.comment} </h4>
				</div>
			</div>
		</div>
		</>
	);
};

export default Comment;