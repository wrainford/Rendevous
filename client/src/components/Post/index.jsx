// Post Component
import React, { useState } from "react";
import * as postService from "../../api/post.service";

//import { string } from "prop-types";




const Post = (props) => {

	
	const [image, setImage] = useState("");
	
	const handleSubmit = async () => {
		let newImage = { image };
		let res = await postService.addImage(newImage).then(() => {
			setImage("");
			console.log(newImage);
		});
		if(!res === 200) {
			alert(`Failed Image Upload: ${res.status}`);
		}
	}
	// console.log(props.comment[0].content)
	return (
		<>
			<h1>Title: {props.title}</h1>
			<div>
				<p>{props.body}</p>
					{props.comment.map((comment) => {
					return (
						<h4>comment: {comment.content}</h4>
					)
					})}
				<form>
					<label>
						Upload A Photo
						<input type="file"/>
						<button onClick={handleSubmit}>Upload</button>
					</label>
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

export default Post;