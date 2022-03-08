import React, { useState, useEffect } from "react";
import * as postService from "../../api/post.service";
import Modal from "react-modal"
import Post from "../../components/Post";
import PostEdit from "../../components/PostEdit";
import "./index.css";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import {GiCancel} from "react-icons/gi";
import { useParams } from "react-router-dom";
Modal.setAppElement("#root");


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
    const [isEdit, setIsEdit] = useState(false);
    const [button, setButton] = useState(<FiEdit size={30} color="#66AFA4"/>)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleClick = () => {
        console.log(isEdit)
        { !isEdit ? (setIsEdit(true)) : (setIsEdit(false))}
        { !isEdit ? (setButton(<GiCancel size={30} color="#66AFA4"/> )) : (setButton(<FiEdit size={30} color="#66AFA4"/>))}
    }

    const handleModal = () => {
       props.deletePosts(); 
       setModalIsOpen(false);
    }

    let id = JSON.parse(localStorage.getItem("id"));
    const Buttons = () => {
        if(id == props.poster) {
            return(
                <>
                    <button onClick={handleClick} className="button1">
                        {button}
                    </button>
                    &nbsp;&nbsp;
                    <button 
                        className="openModalBtn" 
                        onClick={()=>setModalIsOpen(true)}> 
                        <FiTrash2 size={30} color="#66AFA4"/>
                    </button>
                </>
            )
        } else {
            return(<></>);
        }
    }

    return(
        <div className="post-container">
            <br />
            <div className="post-buttons">
            <Buttons/>
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={()=>setModalIsOpen(false)}
                style={
                    { 
                        overlay:{
                            backgroundColor: 'rgba(255, 255, 255, 0.25)',
                        },
                        content:{
                            backgroundColor: "#0D192D",
                            verticalAlign:"center",
                            color: "white",
                            height: "200px",
                            width: "50%",
                            justifyContent: "center",
                            textAlign: "center",
                            top:"30%",
                            left: "25%",
                            right: "25%",
                            bottom: "30%",
                            fontFamily: 'Jost',
                            border: "none"
                        }
                    }
                }
                >
                <h2 className="modal-text">ARE YOU SURE YOU WANT TO DELETE?</h2>
                <div>
                    <button className="modal-close" onClick={()=>setModalIsOpen(false)}>Close</button>
                    &nbsp;&nbsp;
                    <button className="modal-delete" onClick={handleModal}>Delete</button>
                    
                </div>

            </Modal>
            

            </div>
            <PostView 
                isEdit={isEdit}
                title={props.title}
                body={props.body}
                comment={props.comment}
                image={props.image}
                deletePosts={props.deletePosts}
                refreshPosts={props.refreshPosts}
                postId={props.postId}
                className="postview" />

        </div>
    )
};





export default PostToggle

