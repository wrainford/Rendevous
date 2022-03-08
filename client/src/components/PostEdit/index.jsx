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
		<div className="editcontainer">
			<div className="editingdiv">
				<h3 className="editing">Editing...</h3>
			</div>
			<form encType="multipart/form-data" autoComplete="off">
			<div className="titleedit">
				<label>
						<h4 className="title-title">Title: </h4>
						<input
							onChange={(e) => setTitle(e.target.value)}
							value={title}
							type="text"
							name="title"
							placeholder="TITLE"
							className="input-title"
						/>
				</label>
			</div>
			<div className="bodyedit">
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
			</div>
			<div className="imageedit">
				<div className="imgbox">
						<input
							onChange={(e) => setImage(e.target.files[0])}
							filename="image"
							type="file"
							className="add-image"
						/>
				</div>
				<div className="savebutton">
					<div className="buttonbox">
						<button onClick={handleSubmit} className="button-81"> SAVE </button>
					</div>	
				</div>
			</div>
			</form>
		</div>
	);
};

export default PostEdit;
