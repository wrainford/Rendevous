import { useState, useEffect } from "react";
import Post from "../../components/Post";
import User from "../../components/User";
import PostForm from "../../components/PostForm";
import NavBar from "../../components/NavBar";
import Privacy from "../../components/Privacy";
import LogOut from "../../components/LogOut";
import * as postService from "../../api/post.service";
import * as userService from "../../api/user.service";
import { Routes, Route } from "react-router-dom";


// take all of the posts from the db
// render them out in reverse chronological order
// make sure new posts render when created
// usestate, and useeffect for our posts, then map it out

const Home = () => {
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		await postService.getAllPost().then((res) => {
			console.log(res);
			setPosts(res.data.data.reverse());
		});
	};

    const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		await userService.getAllUser().then((res) => {
			// console.log(res);
			setUsers(res.data.data);
		});
	};

	useEffect(() => {
		fetchPosts();
        fetchUsers();
	}, []);



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
    )};	

	
export default Home;
