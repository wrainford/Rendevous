import EditUser from "../../components/EditUser";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import * as userService from "../../api/user.service";


const EditProfilePage = () => {
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
                <h1>Please edit your profile</h1>
                <EditUser user={user}/>
        </div>
        
    )
}

export default EditProfilePage;