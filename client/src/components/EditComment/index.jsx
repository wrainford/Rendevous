import React, { useState } from "react";
import EditCommentForm from "../EditCommentForm";
import "./index.css";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import {GiCancel} from "react-icons/gi";


const EditComment = (props) => {
    const [child, setChild] = useState("");
    const [button, setButton] = useState(<FiEdit size={25} color="#5E5D5D"/>);

    const Submit = () => {
        setChild("");
        setButton(<FiEdit size={25} color="#5E5D5D"/>);
    }

    const HandleClick = () => {
        if(child) {
            setChild("");
            setButton(<FiEdit size={25} color="#5E5D5D"/>);
        } else {
            setChild(<EditCommentForm body={props.body} commentId={props.commentId} submit={Submit}/>);
            setButton(<GiCancel size={25} color="#5E5D5D"/>);
        }
    }

    let id2 = JSON.parse(localStorage.getItem("id"));
    if(id2==props.commenterId){
        return(
        <>
            <button className="button-edit" onClick={HandleClick}>{button}</button>
            {child}
        </>
    )
} else {
    return (
        <></>
    )
}
}

export default EditComment;