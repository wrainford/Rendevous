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

		console.log(res);
		// 201 = create
		if (!res === 201) {
			alert(`Yikes: ${res.status}`);
		}
	};

	return (
		<div>
            <br />
			{/* Used for returning the form data */}
            <div className="postform-container">
            <h3>PostForm Component </h3>
            <br />
			<form encType="multipart/form-data">
				<label>
					Post Title:
					<input
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						type="text"
						name="title"
						placeholder="TITLE"
					/>
				</label>
                <br />
                <br />
				<label>
					Type something
					<textarea
						onChange={(e) => setBody(e.target.value)}
						value={body}
						type="text"
						name="body"
						placeholder="BODY"
					/>
				</label>
                <br />
                <br />
				<label>
					Upload an image:
					<input
						onChange={(e) => setImage(e.target.files[0])}
						filename="image"
						type="file"
					/>
				</label>
			</form>
            <br />
            <div className="postbutton">
			<button onClick={handleSubmit} className="post-button"> POST SOMETHING </button>
            </div>
            </div>
		</div>
	);
};

// PostForm.propTypes = {
// 	refreshPosts: func,
// };

export default PostForm;
