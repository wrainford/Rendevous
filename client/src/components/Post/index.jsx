// Post Component
import React from "react";
//import { string } from "prop-types";

function Post(props) {
	return (
		<>
			<h1>Title: {props.title}</h1>
			<div>
				<p>{props.body}</p>
				{/* <p>{props.comment}</p> */}
			</div>
		</>
	);
}

// Post.propTypes = {
// 	title: string.isRequired,
// 	author: string.isRequired,
// 	body: string.isRequired,
// };

// Post.defaultProps = {
// 	author: "Teri London",
// };

export default Post;