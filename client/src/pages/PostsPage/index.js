import { useState, useEffect, useReducer } from "react";
import PostToggle from "../../components/Post";
import Post from "../../components/Post"
import PostForm from "../../components/PostForm";
import PostTest from "../../components/PostTest";
import NavBar from "../../components/NavBar";
import ProfilePage from "../ProfilePage";
import PrivacyPage from "../PrivacyPage";
import * as postService from "../../api/post.service";
import * as userService from "../../api/user.service";
import * as authService from "../../api/auth.service";
import { Routes, Route } from "react-router-dom";
import "./index.css"

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
        case "deletePosts":
            return { ...prevState, posts: prevState.posts.filter( p => p._id !== action.payload)}
		default:
			return prevState;
	}
}

const Posts = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const {posts, isLoggedIn} = state;
	const [users, setUsers] = useState([]);

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

        const deletePosts = async (id) => { 
            //console.log("click")
            await postService.destroyPost(id).then((res)=>{
                //console.log(`post destroyed ${id}`)
                dispatch({ type: "deletePosts", payload:id});
            })
        }

	useEffect(() => {
		userActive();
		fetchPosts();
        fetchUsers();
        
	}, []);


    // if(isLoggedIn) {

    return (	
            <div>
                
                {/* 1. NAVBAR */}
                <NavBar />
                   
                    <Routes>
                        {/* ROUTE AND DATA FOR POSTS and since our homepage route is "/" it will render out the below */}
                        <Route path="/" element={
                            <>
                                
                                {/* 2. PostForm Component  */}
                                <PostForm refreshPosts={() => fetchPosts()}/>
                                {/* 3. Post Component  */}
                            
                                {posts.map((post) => {
                                        return (
                                        <PostTest
                                            title={post.title}
                                            body={post.body}
                                            comment = {post.comment}
                                            image={post.image}
                                            deletePosts = {() => deletePosts(post._id)}
                                            postId={post._id} 
                                            refreshPosts={() => fetchPosts()}
                                        />
                                        )
                                })}
                            </>
                        }
                        ></Route>

                        {/* ROUTE AND DATA FOR USERS once on /users */}
                        <Route path="users" element={
                            <>
                                {/* User Component */}
                                    {users.map((user) => {
                                            return (
                                            <ProfilePage
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

                       

                        {/* // ROUTE FOR LOGOUT
                        <Route path="logout" element={<LogOut />}></Route> */} 

                    </Routes>
        
            </div> 
        )};
        
            // else {
            //     return (
            //         <div>
            //             <LoginPage />
            //         </div>
            //     )
            // };	
// };
	
export default Posts;
