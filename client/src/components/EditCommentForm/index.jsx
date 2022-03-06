import React from "react";
import * as PostService from "../../api/post.service"

const EditCommentForm = (props) => {
    const HandleSubmit = () => {

    }

    return(
        <>
            <form>
                <input
                    type="text"
                    value={props.body}
                />
                <button onclick={HandleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default EditCommentForm;