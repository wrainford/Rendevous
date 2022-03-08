import { useState } from "react";
import * as postService from "../../api/post.service";
import "./index.css"

const PostEdit = (props) => {

	const [title, setTitle] = useState(props.title);
	const [body, setBody] = useState(props.body);
	const [image, setImage] = useState(props.image);
	const handleSubmit = async () => {
		const postData = new FormData();
		postData.append("title", title);
		postData.append("body", body);
		postData.append("image", image);
		let res = await postService.updatePost(props.postId,postData).then(() => {
			setTitle("");
			setBody("");
			setImage("");
			props.refreshPosts();
		});
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
			<form encType="multipart/form-data" autocomplete="off">
				<label>
					<div className="edit-title">
					<h4 className="title-title">Title: </h4>
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
					<h4 className="body-post">Post: </h4>
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
				<div className="postbutton">
			<button onClick={handleSubmit} className="post-button"> SAVE CHANGES </button>
            </div>
			</form>
            <br />
           
            </div>
		</div>
	);
};

// PostForm.propTypes = {
// 	refreshPosts: func,
// };

export default PostEdit;
