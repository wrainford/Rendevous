import { useState, useEffect, useReducer } from "react";
import Post from "../../components/Post";
import User from "../../components/User";
import PostForm from "../../components/PostForm";
import NavBar from "../../components/NavBar";
import Privacy from "../../components/Privacy";
import Login from "../../components/Login";
import LogOut from "../../components/LogOut";
import * as postService from "../../api/post.service";
import * as userService from "../../api/user.service";
import * as authService from "../../api/auth.service";
import { Routes, Route } from "react-router-dom";

const initialState = {
	posts: [],
	isLoggedIn: false,
}

const reducer = (prevState, action) => {
	switch(action.type) {
		case "setPosts":
			return{...prevState, posts: action.payload}
		case "isLoggedIn":
			return {...prevState, isLoggedIn: action.payload}
		default:
			return prevState;
	}
}

const Home = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const {posts, isLoggedIn} = state;
	const [users, setUsers] = useState([]);

	// const fetchPosts = async () => {
	// 	await postService.getAllPost().then((res) => {
	// 		console.log(res);
	// 		setPosts(res.data.data.reverse());
	// 	});
	// };
	const userActive = () => {
		if(authService.currentUser()) {
			dispatch({ type: "isLoggedIn", payload: true})
		} else
			dispatch({ type: "isLoggedIn", payload: false})
	}

		const fetchPosts = async () => {
		await postService.getAllPost().then((res) => {
				dispatch({ type: "setPosts", payload: res.data.data.reverse()});
		});
	};
	
		const fetchUsers = async () => {
			await userService.getAllUser().then((res) => {
				setUsers(res.data.data);
			});
		};

	useEffect(() => {
		userActive();
		fetchPosts();
        fetchUsers();

	}, []);


if(isLoggedIn) {

return (	
        <div>
            <NavBar />
				<Routes>

				<Route path="/" element={
					<>
						<PostForm refreshPosts={() => fetchPosts()}/>
						{posts.map((post) => {
								return (
							<Post
							title={post.title}
							body={post.body}
							comment = {post.comment}
							image={post.image}
							key={[post._id]} 
							/>
							)
							})}
				</>
			}
></Route>

<Route path="users" element={
	<>
            {users.map((user) => {
					return (
			    <User
                userName={user.userName}
                name={user.name}
                email={user.email}
                project={user.project.title}
                key={user._id} 
				/>
                )
                })}
			 </>
}
></Route>

    <Route path="privacy" element={<Privacy />}></Route>
    <Route path="logout" element={<LogOut />}></Route>

 </Routes>
	
 
        </div> 
    )} 
	
		else {
			return (
				<div>
					<Login />
				</div>
			)
		};	
};
	
export default Home;
