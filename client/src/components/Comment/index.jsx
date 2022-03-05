// Post Component
import React, { useState } from "react";
import * as postService from "../../api/post.service";
import "./index.css"

//import { string } from "prop-types";



const Comment = (props) => {
	return (
		<>

        <div className="comment-container">
           <h3>This is comment component</h3>
		   <h4>comment: {props.comment} </h4>
				{/* {props.comment.map((singlec) => {
					return (
						// 
					)
					})} */}
        </div>
		</>
	);
};

export default Comment;