
// Post Component
import React, { useEffect, useState } from "react";
import * as postService from "../../api/post.service";
import * as userService from "../../api/user.service";
import DelComment from "../DeleteComment";
import EditComment from "../EditComment";
import "./index.css"
import {BsPersonCircle} from "react-icons/bs"



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
						<div className="circle">
						<img src = {`/uploads/postImages/${commentAvatar}`} alt="..." className= "user-icon"/>
						</div>
						
						<div className="text-container">
							<h4 className="h4-username">{commentName}</h4>
							<h4 className="h4-comment-text"> {props.comment} </h4>
							<DelComment commentId={props.id} 
										refreshPosts={props.refreshPosts} 
										commenterId={props.userName}
										className="delete-btn"/>
						</div>
						<div className="comment-buttons">
							<EditComment commentId={props.id} 
										commenterId={props.userName}
										body={props.comment}/>
						</div>
					</div>
				</>
			)
		
	}



export default Comment;