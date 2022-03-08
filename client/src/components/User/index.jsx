import { useState, useEffect } from "react";
import './index.css';
import PostTest from '../../components/PostTest';

const User = (props) => {

	return (
		<>
			<div className="prof-container-user">
				
			<div className="img-profile">
				<img className="img"src = {`/uploads/postImages/${props.user.avatar}`} alt="..." />
			</div>
			<div className="prof-username">
			<h3>{props.user.userName}</h3>
			<h3>Sarah, Will, Nelia, Denzel</h3>
			<h3>Sarah, Will, Nelia, Denzel</h3>
			<h3>Sarah, Will, Nelia, Denzel</h3>
			</div>
			<div className="my-nick-name">
			<h2 className="my-nick-name" >{props.user.name}</h2>
			</div>
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