import React, { useState, useEffect } from "react";
import * as postService from "../../api/post.service";
import Post from "../../components/Post";
import PostEdit from "../../components/PostEdit";
import "./index.css";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import {GiCancel} from "react-icons/gi";

const PostView = (props) => {
    if (props.isEdit) {
        return (
        // console.log(props),
        <PostEdit 
                title={props.title}
                body={props.body}
                comment={props.comment}
                image={props.image}
                deletePosts={props.deletePosts}
                postId={props.postId} 
                refreshPosts={props.refreshPosts}
        />)
    }
    return (
        // console.log(props),
        <Post 
            title={props.title}
            body={props.body}
            comment={props.comment}
            image={props.image}
            deletePosts={props.deletePosts}
            refreshPosts={props.refreshPosts}
            postId={props.postId} 
        />)
}




const PostToggle = (props) => {
    const [coms, setComs] = useState([]); 
    const fetchComs = async () => {
        await postService.showPost().then((res) => {
            //console.log(res.data.data) 
            setComs(res.data.data);

        });
    };
    useEffect(() => {
        fetchComs();
    }, []);

    const [isEdit, setIsEdit] = useState(false);
    const [button, setButton] = useState(<FiEdit size={30} color="#66AFA4"/>)

    const handleClick = () => {
        console.log(isEdit)
        { !isEdit ? (setIsEdit(true)) : (setIsEdit(false))}
        { !isEdit ? (setButton(<GiCancel size={30} color="#66AFA4"/> )) : (setButton(<FiEdit size={30} color="#66AFA4"/>))}
    }

    return(
        <div className="post-container">
            
            <br />
            <div className="post-buttons">
            <button onClick={handleClick} className="button1">
                {button}
            </button>
            &nbsp;&nbsp;
            <button onClick ={props.deletePosts} className="button-trash">
                <FiTrash2 size={30} color="#66AFA4"/>
            </button>
            </div>
            <PostView 
                isEdit={isEdit}
                title={props.title}
                body={props.body}
                comment={props.comment}
                image={props.image}
                deletePosts={props.deletePosts}
                postId={props.postId}
                className="postview" />

        </div>
    )
};





export default PostToggle

