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
        <div className="profileform-Container">
        <h1 className="editprof-title">Edit Your Profile</h1>
            <form className="editprof-form">
                <label>Username:
                &nbsp;&nbsp;&nbsp;
                    <input className="editprof-username"
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        value={userName}
                    />
                </label>
                <br />
                <label>Name:
                &nbsp;&nbsp;&nbsp;
                    <input className="editprof-name"
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        value={name}
                    />
                </label>
                <br />
                <label>Email:
                &nbsp;&nbsp;&nbsp;
                    <input className="editprof-email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        value={email}
                    />
                </label>
            </form>
            <button onClick={HandleSubmit} className="editprof-button">Edit Your Profile Info</button>
            <button onClick={HandleSubmit} className="editprof-delete">Delete Profile</button>
            </div>
        </>
    
    )
};

export default EditUser;