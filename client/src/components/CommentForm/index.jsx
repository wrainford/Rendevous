// Post Component
import React, { useState } from "react";
import * as postService from "../../api/post.service";
import "./index.css"

//import { string } from "prop-types";



const CommentForm = (props) => {
	const [content, setContent] = useState("");

	const handleSubmit = async () => {
		let newComment = {content};
		let res = await postService.createComment(props.id, newComment).then(() => {
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
			<div className="commentform-container">
				<form encType="application/json">
					{props.id} 
					<input
						onChange={(e) => setContent(e.target.value)}
						value={content}
						type="text"
						name="content"
						placeholder="Add a comment..."
					/>
					<button onClick={handleSubmit}>Post</button>
				</form>
				
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

export default CommentForm;