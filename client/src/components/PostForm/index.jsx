import { useState } from "react";
//import { func } from "prop-types";
import * as postService from "../../api/post.service";

const PostForm = ({ refreshPosts }) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const handleSubmit = async () => {
		let newPost = { title, body };
		let res = await postService.createPost(newPost).then(() => {
			setTitle("");
			setBody("");
			refreshPosts();
			console.log(newPost);
		});

		console.log(res);
		// 201 = create
		if (!res === 201) {
			alert(`Yikes: ${res.status}`);
		}
	};

	return (
		<div>
			<form>
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
			</form>
			<button onClick={handleSubmit}> POST SOMETHING </button>
		</div>
	);
};

// PostForm.propTypes = {
// 	refreshPosts: func,
// };

export default PostForm;
