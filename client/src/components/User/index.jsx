import { useState, useEffect } from "react";
import './index.css';
import PostTest from '../../components/PostTest';

const User = (props) => {

	return (

		<>
			<div className="container">
				<div className="profile">
					<div className="top">
					<div className="img-profile">
						<div className="bigcircle">
						<img className="user-icon2"src = {`/uploads/postImages/${props.user.avatar}`} alt="..."/>
						</div>
						<h2 className="nickName-h1" >{props.user.userName}</h2>
					</div>
					<div className="username">
							<h2 className="prof-name">{props.user.name}</h2>
							<br />
							<h3>Git Hub: {props.user.gitHub}</h3>
							<br />
							<h3>YouTube: {props.user.youTube}</h3>
							<br />
							<h3>Bio:</h3>
							<br />
							<p>{props.user.bio}</p>
					</div>	
					</div>

						<div className="my-nick-name">
					
						</div>
				
				</div>

				<div className="posts">
					<h1 className="yourposts"> Your Posts </h1>
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




				</div>







			</div>












		{/* <div className="mainUser">  */}
		{/* <div className="prof-container-user">
          <div className="img-profile">
            <img className="img"src = {`/uploads/postImages/${props.user.avatar}`} alt="..." />
          </div>
		<div className="User-name">
			<br />
				<h2 className="prof-name">{props.user.name}</h2>
				<br />
				<h3>Git Hub: {props.user.gitHub}</h3>
				<br />
				<h3>YouTube: {props.user.youTube}</h3>
				<br />
				<h3>Bio:</h3>
				<br />
				<p>{props.user.bio}</p>
			</div>	
			<div className="my-nick-name">
			<h2 className="nickName-h1" >{props.user.name}</h2>
			</div>
			</div> */}
					{/* {props.userPost?.map((post) => {
						return(
							<PostTest 
							title={post.title}
							body={post.body}
							comment = {post.comment}
							image={post.image}
							postId={post._id} 
							/>
						)
			})} */}
		{/* </div> */}
		</>
	);
}


export default User;