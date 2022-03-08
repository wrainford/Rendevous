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
        <>
            <NavBar />
 
                 <div className="prof-container" >
                    
                        <User user={user} userPost={userPost}/>  
                        <NavLink className="editUser-button" to={`/users/${id}/edit`} element={<EditProfilePage/>}>Edit </NavLink>
                        </div>      
             </>  
        
        
    )
}

export default ProfilePage