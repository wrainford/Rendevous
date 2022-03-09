import { useState } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
//import { func } from "prop-types";
import * as postService from "../../api/post.service";
import "./index.css"

const PostForm = ({ refreshPosts }) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [image, setImage] = useState("");

	const handleSubmit = async () => {
		//e.preventDefault();

		const formData = new FormData();
		formData.append("title", title);
		formData.append("body", body);
		formData.append("image", image);


		if (title == ""){
			alert("Please input title")
		} else if(body ==""){
			alert("Please input body")
		} else if(body=="" && title==""){
			alert("Please input title and body")
		} else {
		let res = await postService.createPost(formData).then(() => {
			setTitle("");
			setBody("");
			setImage("");
			refreshPosts();
			
		});}

	};

	return (
		<div className="flexbox-container">
			<div className="whatsonyourmind">
				<h2 className="create-post"> WHAT'S ON YOUR MIND </h2> 
			</div>

			<form encType="multipart/form-data" autoComplete="off" className="create-post-form">
				<div className="addtitle">
					<label>
							<input
								className="input-title"
								onChange={(e) => setTitle(e.target.value)}
								value={title}
								type="text"
								name="title"
								placeholder="Add title here (required)"
							/>
					</label>
				</div>

				<div className="addbody">
					<label>
							<textarea
							className="input-body"
							onChange={(e) => setBody(e.target.value)}
							value={body}
							type="text"
							name="body"
							placeholder="Type Something (required)"
							/>
					</label>
				</div>

				<div className="imagebox">
					<div className="addimage">
						
							<input
								onChange={(e) => setImage(e.target.files[0])}
								filename="image"
								type="file"
								className="input-image"
							/>
					</div>
					<div className="postbutton">
						<div className="buttonbox">
						<button onClick={handleSubmit} className="button-81"> POST </button>
						</div>
						
					</div>

				</div>
			</form>
		</div>

	);
};


export default PostForm;
