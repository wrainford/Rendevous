// import NavBar from "../../components/NavBar";
// // import { Routes, Route } from "react-router-dom";
// // import * as postService from "../../api/post.service";


// const Home = () => {
    
//     return (
//         <div>
//             <NavBar/>
//         </div>
//     )
// }

// export default Home;

import { useState, useEffect } from "react";
import Post from "../../components/Post";
import PostForm from "../../components/PostForm";
import NavBar from "../../components/NavBar";
import * as postService from "../../api/post.service";

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

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
        <div>
            <NavBar />
            <PostForm refreshPosts={() => fetchPosts()}/>
            {posts.map((post) => {
					return (
			    <Post
                title={post.title}
                body={post.body}
                key={post._id} 
				/>
                )
                })}
        </div>
    )};	

	
export default Home;
