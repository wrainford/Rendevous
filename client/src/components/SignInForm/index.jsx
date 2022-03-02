// import React, {useState} from 'react';
// import * as userService from "../../api/user.service";

// const SignInForm = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password:'',
//     })

// 	// const handleSubmit = async () => {
// 	// 	let logIn = { email, password };
// 	// 	let res = await postService.createPost(newPost).then(() => {
// 	// 		setTitle("");
// 	// 		setBody("");
// 	// 		refreshPosts();
// 	// 		console.log(newPost);
// 	// 	});

// 		// console.log(res);
// 		// // 201 = create
// 		// if (!res === 201) {
// 		// 	alert(`Yikes: ${res.status}`);
// 		// }
	

// 	return (
// 		<div>
// 			<form>
// 				<label>
// 					Post Title:
// 					<input
// 						onChange={(e) => setTitle(e.target.value)}
// 						value={title}
// 						type="text"
// 						name="title"
// 						placeholder="TITLE"
// 					/>
// 				</label>
// 				<label>
// 					Type something
// 					<textarea
// 						onChange={(e) => setBody(e.target.value)}
// 						value={body}
// 						type="text"
// 						name="body"
// 						placeholder="BODY"
// 					/>
// 				</label>
// 			</form>
// 			<button onClick={handleSubmit}> POST SOMETHING </button>
// 		</div>
// 	);
// };

// // PostForm.propTypes = {
// // 	refreshPosts: func,
// // };

// export default SignInForm;