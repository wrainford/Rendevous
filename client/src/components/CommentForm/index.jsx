// Post Component
import React, { useState } from "react";
import * as postService from "../../api/post.service";
import "./index.css"

//import { string } from "prop-types";



const CommentForm = (props) => {

	// console.log(props.comment[0].content)
	return (
		<>
        <div className="commentform-container">
            <h3>CommentForm Component</h3>
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

export default CommentForm;