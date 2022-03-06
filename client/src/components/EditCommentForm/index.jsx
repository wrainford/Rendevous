import React, { useState } from "react";
import * as postService from "../../api/post.service"

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
            <form>
                <input
                    onChange={(e) => setContent(e.target.value)}
                    type="text"
                    value={content}
                />
                <button onClick={HandleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default EditCommentForm;