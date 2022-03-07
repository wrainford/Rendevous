import { useParams, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import User from '../../components/User';
import EditProfilePage from '../EditProfilePage';
import * as userService from "../../api/user.service";
import './index.css';


const ProfilePage = () => {
    const [user, setUser] = useState("");
    let {id} = useParams();

    const getUser = async () => {
        await userService.showUser(id).then((res) => {
            setUser(res.data.data);
        })
    }
    
    useEffect(() => {
        getUser(id);
    }, []);
    
    return (
        <div>
            <NavBar />
           
                 <div className="prof-container" >
                        <h1>Welcome to your profile page.</h1> 
                        <User props={user}/> 
                        <NavLink className="editprof-button" to={`/users/${id}/edit`} element={<EditProfilePage/>}>Edit Profile</NavLink>
    
                </div>
        </div>
        
    )
}

export default ProfilePage