import { useParams, NavLink } from 'react-router-dom'
import { useState, useEffect, useLayoutEffect } from 'react';
import NavBar from '../../components/NavBar';
import User from '../../components/User';
import EditProfilePage from '../EditProfilePage';
import * as userService from "../../api/user.service";
import './index.css';


const ProfilePage = () => {
    const [user, setUser] = useState("");
    const [userPost, setUserPost] = useState([]);
    let {id} = useParams();

    const getUser = async () => {
        await userService.showUser(id).then((res) => {
            setUser(res.data.data);
            setUserPost(res.data.data.post)
        })
    }
    
    useEffect(() => {
        getUser({id});
    }, []);

   //console.log(user.post)
   //setUserPost(user.post);

    return (
        <div>
            <NavBar />
           <div className='prof-main'>
                 <div className="prof-container" >

                        <h1>Welcome to your profile page.</h1> 
                        <User user={user} userPost={userPost}/>  
                        <NavLink className="editprof-button" to={`/users/${id}/edit`} element={<EditProfilePage/>}>Edit Profile</NavLink> 
                </div>
             </div>  
        </div>
        
    )
}

export default ProfilePage