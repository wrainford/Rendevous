import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as userService from "../../api/user.service";
import * as authService from "../../api/auth.service";
import "./index.css";

const EditUser = (props) => {
   
    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    let {id} = useParams();

    const HandleSubmit = async () => {
        let updatedUser = {userName, name, email}
         await userService.updateUser(props.user._id, updatedUser);
        navigate(`/users/${id}`);
    }

    const deleteProfile = async () => {
        let res = await userService.destroyUser(props.user._id).then(() => {
            authService.logout();
            navigate('/');
        });
        console.log(res);
    }

    useEffect(() => {
        setUserName(props.user.userName);
        setName(props.user.name);
        setEmail(props.user.email);
    }, [props]);

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
            <button onClick={deleteProfile} className="editprof-delete">Delete Profile</button>
            </div>
        </>
    
    )
};

export default EditUser;