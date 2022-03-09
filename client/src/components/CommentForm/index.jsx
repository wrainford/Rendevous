// Post Component
import React, { useState, useEffect } from "react";
import * as postService from "../../api/post.service";
import * as userService from "../../api/user.service";
import "./index.css"
import { FiSend } from "react-icons/fi";
import {BsPersonCircle} from "react-icons/bs"

const CommentForm = (props) => {
	const [content, setContent] = useState("");
	const [yourAvatar, setYourAvatar] = useState("");

	let me = JSON.parse(localStorage.getItem("id"));
	const userQuery = async (id) => {
		await userService.showUser(id).then((res)=>{
			setYourAvatar(res.data.data.avatar)
		})
	} 

	useEffect(() =>{
		userQuery(me);
	},[])


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
					<div className="circle">
						<img src = {`/uploads/postImages/${yourAvatar}`} alt="..." className= "user-icon"/>
					</div>
						{/* <BsPersonCircle size={30} /> */}
					
				</div>
				
				
					<form encType="application/json" className="comment-form" autoComplete="off">
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