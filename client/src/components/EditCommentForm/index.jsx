import React, { useState } from "react";
import * as postService from "../../api/post.service"
import "./index.css"

const EditCommentForm = (props) => {
    
    const [content, setContent] = useState(props.body);

    const HandleSubmit = async () => {
        let updatedComment = { content }
        let res = await postService.updateComment(props.commentId, updatedComment).then(() => {
            props.submit();
        })
        console.log(res);
    }

    return(
        <>
        <div className="edit-container">

    
            <form autoComplete="off" className="edit-form">
                <input
                    className = "com-edit-form"
                    onChange={(e) => setContent(e.target.value)}
                    type="text"
                    value={content}
                />
                <div className="submit-div">
                    <button className="com-edit-button" onClick={HandleSubmit}>Submit</button>
                </div>
                
                
                
            </form>
        </div>
        </>
    
    )
}

export default EditCommentForm;