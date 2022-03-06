import { useState } from "react";
import * as postService from "../../api/post.service";
import "./index.css"

const PostEdit = (props) => {
	const [title, setTitle] = useState(props.title);
	const [body, setBody] = useState(props.body);
	const [image, setImage] = useState(props.image);
	const handleSubmit = async () => {
        // This is not correct but pushing to save
		const formData = new FormData();
		formData.append("title", title);
		formData.append("body", body);
		formData.append("image", image);
		let res = await postService.createPost(formData).then(() => {
			setTitle("");
			setBody("");
			setImage("");
			//refreshPosts();
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
            <h3 className="editing">Editing...</h3>
            <br />
			<form encType="multipart/form-data">
				<label>
					<div className="edit-title">
					<h4>Title: </h4>
					<input
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						type="text"
						name="title"
						placeholder="TITLE"
						className="input-title"
					/>
					</div>
				</label>
                <br />
                <br />
				<label>
					<h4>Post: </h4>
					<textarea
						onChange={(e) => setBody(e.target.value)}
						value={body}
						type="text"
						name="body"
						placeholder="BODY"
						className="input-body"
					/>
				</label>
                <br />
                <br />
				<label>
					<h4 className="add-image-text">Add image </h4>
					<input
						onChange={(e) => setImage(e.target.files[0])}
						filename="image"
						type="file"
						className="add-image"
					/>
				</label>
			</form>
            <br />
            <div className="postbutton">
			<button onClick={handleSubmit} className="post-button"> SAVE CHANGES </button>
            </div>
            </div>
		</div>
	);
};

// PostForm.propTypes = {
// 	refreshPosts: func,
// };

export default PostEdit;
