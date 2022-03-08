import { useState, useEffect } from "react";
import './index.css';
import PostTest from '../../components/PostTest';

const User = (props) => {

	return (
		<>
			<div className="prof-container">
			<img src = {`/uploads/postImages/${props.user.avatar}`} alt="..." style= {{width: "25%"}}/>
			<h1 className="prof-username">{props.user.userName}</h1>
				<h2 className="prof-name">{props.user.name}</h2>
				<h3>Git Hub: {props.user.gitHub}</h3>
				<h3>YouTube: {props.user.youTube}</h3>
				<h3>Bio:</h3>
				<p>{props.user.bio}</p>
			</div>
					{props.userPost?.map((post) => {
						return(
							<PostTest 
							title={post.title}
							body={post.body}
							comment = {post.comment}
							image={post.image}
							postId={post._id} 
							/>
						)
			})}
		</>
	);
}


export default User;