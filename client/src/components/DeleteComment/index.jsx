import React from "react";
import * as postService from "../../api/post.service";
import "./index.css";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import {GiCancel} from "react-icons/gi";


const DelComment = (props) => {
    let id = JSON.parse(localStorage.getItem("id"));
    
    const Delete = async () => {
        let res = await postService.deleteComment(props.commentId).then(() => {
            props.refreshPosts();
        });

        console.log(res);
    }

    if(id == props.commenterId){
        return(
            <>
                <button className="button-trash" onClick={Delete}> <FiTrash2 size={25} color="#5E5D5D"/></button>
            </>
        )
    } else {
        return(<></>)
    }


}

export default DelComment;