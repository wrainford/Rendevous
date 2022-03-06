import React, { useState } from "react";
import * as userService from "../../api/user.service";
import "./index.css";

const EditUser = (props) => {
    const [userName, setUserName] = useState(props.user.userName);
    const [name, setName] = useState(props.user.name);
    const [email, setEmail] = useState(props.user.email);

    const HandleSubmit = async () => {
        let updatedUser = {userName, name, email}
        let res = await userService.updateUser(props.user._id, updatedUser);
        console.log(res);
    }

    return(
        <>
            <form>
                <label>User name:
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        value={userName}
                    />
                </label>
                <br />
                <label>Name:
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        value={name}
                    />
                </label>
                <br />
                <label>Email:
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        value={email}
                    />
                </label>
            </form>
            <button onClick={HandleSubmit}>Submit</button>
        </>
    )
};

export default EditUser;