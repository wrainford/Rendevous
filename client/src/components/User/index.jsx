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
			<h1 className="prof-username">{props.user.userName}</h1>
				<h2 className="prof-name">{props.user.name}</h2>
				<h3>Git Hub: {props.user.gitHub}</h3>
				<h3>YouTube: {props.user.youTube}</h3>
				<h3>Bio:</h3>
				<p>{props.user.bio}</p>

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