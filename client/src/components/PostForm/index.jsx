import { useState } from "react";
//import { func } from "prop-types";
import * as postService from "../../api/post.service";

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
			{/* Used for returning the form data */}
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
				<label>
					Upload an image:
					<input
						onChange={(e) => setImage(e.target.files[0])}
						filename="image"
						type="file"
					/>
				</label>
			</form>
			<button onClick={handleSubmit}> POST SOMETHING </button>
		</div>
	);
};

// PostForm.propTypes = {
// 	refreshPosts: func,
// };

export default PostForm;
