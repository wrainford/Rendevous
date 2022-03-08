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
		<div>
			{/* Used for returning the form data */}
		<div className="main-post-form">
            <div className="postform-container">
			<h2 className="create-post"> WHAT'S ON YOUR MIND </h2> 
			<form encType="multipart/form-data" autocomplete="off" className="create-post-form">
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
				<div className="add-img-container">
							<div className="small-div">
								<h4 className="add-image-text">Add image</h4>
									<input
										onChange={(e) => setImage(e.target.files[0])}
										filename="image"
										type="file"
										className="add-img-btn"
									/>
							</div>
							<button onClick={handleSubmit} className="button-81"> POST SOMETHING </button>
						</div>
			</form>
            	<br />
          </div>
		</div>
	</div>
	);
};

// PostForm.propTypes = {
// 	refreshPosts: func,
// };

export default PostForm;
