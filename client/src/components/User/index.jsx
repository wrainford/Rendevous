import { useState, useEffect } from "react";
import './index.css';
import PostTest from '../../components/PostTest';

const User = (props) => {
	const [posts, setPosts] = useState([]);
	
	useEffect(() =>{
		setPosts(props.user.post);
	}, []);
	
	return (
		<>
			<div className="prof-container">
			<img src = {`/uploads/postImages/${props.user.avatar}`} alt="..." style= {{width: "25%"}}/>
			<h1 className="prof-username">{props.user.userName}</h1>
				<h2 className="prof-name">{props.user.name}</h2>
			</div>
					{/* {posts.map((post) => {
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
		</>
	);
}


export default User;