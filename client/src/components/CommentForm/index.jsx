// Post Component
import React, { useState } from "react";
import * as postService from "../../api/post.service";
import "./index.css"
import { FiSend } from "react-icons/fi";
import {BsPersonCircle} from "react-icons/bs"

const CommentForm = (props) => {
	const [content, setContent] = useState("");

	const handleSubmit = async () => {
		let newComment = {content};
		let res = await postService.createComment(props.postId, newComment).then(() => {
			setContent("");
			props.refreshPosts();
		});

		console.log(res);
		if (!res === 201) {
			alert(`Yikes: ${res.status}`);
		}
	}

	return (
		<>
		<div className="parent">
			<div className="child1">
					<BsPersonCircle size={30} />
			</div>
			
			
				<form encType="application/json" className="comment-form" >
				<div className="commentform-container">
					<input
						className="comment-text"
						onChange={(e) => setContent(e.target.value)}
						value={content}
						type="text"
						name="content"
						placeholder="Add a comment..."
					/>
					<button className="comment-post-button" onClick={handleSubmit}>
					<FiSend size={30} color="#66AFA4"/>
					</button>
					</div>
				</form>
			
		</div>
		</>
	);
};

export default CommentForm;