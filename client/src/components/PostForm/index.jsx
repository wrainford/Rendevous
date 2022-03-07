import { useState } from "react";
//import { func } from "prop-types";
import * as postService from "../../api/post.service";
import "./index.css"

const PostForm = ({ refreshPosts }) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [image, setImage] = useState("");

	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append("title", title);
		formData.append("body", body);
		formData.append("image", image);
		
		let res = await postService.createPost(formData).then(() => {
			setTitle("");
			setBody("");
			setImage("");
			refreshPosts();
		});

		// 201 = create
		if (!res === 201) {
			alert(`Yikes: ${res.status}`);
		}
	};

	return (
		<div >
			{/* Used for returning the form data */}
		<div className="main-post-form">
            <div className="postform-container">
			<h2 className="create-post"> WHAT'S ON YOUR MIND </h2> 
			<form encType="multipart/form-data">
				<label>
					<input
						className="input-title"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						type="text"
						name="title"
						placeholder="Add title here"
					/>
				</label>
                <br />
                <br />
				<label>
					<textarea
						className="input-body"
						onChange={(e) => setBody(e.target.value)}
						value={body}
						type="text"
						name="body"
						placeholder="Type Something"
					/>
				</label>
                <br />
                <br />
				<label>
					<div className="add-image">
					<h4 className="add-image-text">Add image</h4>
					&nbsp;&nbsp;&nbsp;
					<input
						onChange={(e) => setImage(e.target.files[0])}
						filename="image"
						type="file"
					/>
					</div>
				</label>
			</form>
            <br />
            <div className="postbutton">
			<button onClick={handleSubmit} className="post-button"> POST SOMETHING </button>
            </div>
		  </div>
            </div>
		</div>
	);
};

// PostForm.propTypes = {
// 	refreshPosts: func,
// };

export default PostForm;
