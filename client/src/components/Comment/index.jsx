// Post Component
import React, { useEffect, useState } from "react";
import * as userService from "../../api/user.service";
import DelComment from "../DeleteComment";
import EditComment from "../EditComment";
import "./index.css"




const Comment = (props) => {
	const [commentName, setCommentName] = useState("");
	const [commentAvatar, setCommentAvatar] = useState("");

	const userQuery = async (id) => {
		await userService.showUser(id).then((res)=>{
			setCommentName(res.data.data.userName)
			setCommentAvatar(res.data.data.avatar)
		})
	} 

	useEffect(() =>{
		userQuery(props.userName);
	},[])

	return (
		<>
			<div className="comment-container">
			<img src = {`/uploads/postImages/${commentAvatar}`} alt="..." className= "user-icon" style= {{width: "5%"}}/>
			<div className="text-container">
			<h4 className="h4-username">{commentName}</h4>
			<h4 className="h4-comment-text"> {props.comment} </h4>
			</div>
			
			<div className="comment-buttons">
				<EditComment commentId={props.id} body={props.comment}/>
			</div>
			<div className="delete-btn-div">
				<DelComment commentId={props.id} refreshPosts={props.refreshPosts} className="delete-btn"/></div>

			</div>
		</>
	);
};


export default Comment;