import { useState, useEffect, useReducer } from "react";
import { useParams } from 'react-router-dom'
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
    //let {id} = useParams();
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
	
        const deletePosts = async (id) => { 
            //console.log("click")
            await postService.destroyPost(id).then((res)=>{
                //console.log(`post destroyed ${id}`)
                dispatch({ type: "deletePosts", payload:id});
            })
        }

        const fetchUsers = async () => {
			await userService.getAllUser().then((res) => {
				setUsers(res.data.data);
			});
		};

        let myid = JSON.parse(localStorage.getItem("id"));

       
        

        
	useEffect(() => {
		userActive();
		fetchPosts();
        fetchUsers();
    
	}, []);


    return (	
            <div>
                
                {/* 1. NAVBAR */}
                   <NavBar/>
                            <>
                            <div className="meet-parent">
                            <div className="meet-div">
                                <img src={"/uploads/rdvlogo.png"} alt="" className="meet" style={{width:"100%"}}/>
                            </div>
                            </div>

                            <div className="usercontainer">
                            {users.slice(1,9).map((user)=>{
                                return (
                                    <img src = {`/uploads/postImages/${user.avatar}`} alt="..." 
                                    className="users"
                                    />
                                )
                            })}
                            </div>





                                
                                {/* 2. PostForm Component  */}
                                <PostForm refreshPosts={() => fetchPosts()}/>
                              
                               {/* 3. Post Component  */}
                                {posts.map((post) => {
                                        return (
                                        <>
                                        {/* <img src = {`/uploads/postImages/${post.user.avatar}`} alt="..." style= {{width: "5%"}}/> */}
                                        {/* <h4>{post.user.name}</h4> */}
                                        <PostTest
                                            avatar={post.user.avatar}
                                            userName={post.user.name}
                                            title={post.title}
                                            body={post.body}
                                            comment = {post.comment}
                                            image={post.image}
                                            deletePosts = {() => deletePosts(post._id)}
                                            postId={post._id}
                                            poster={post.user._id}
                                            refreshPosts={() => fetchPosts()}
                                        />
                                        </>
                                        )
                                })} 
                            </>

            </div> 
        )};
        
      
// };
	
export default Posts;
