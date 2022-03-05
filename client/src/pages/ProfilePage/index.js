import User from '../../components/User';
import NavBar from '../../components/NavBar';

const ProfilePage = (props) => {
    return (
        <div>
            <NavBar />
            <h1>This is the ProfilePage</h1>
            <User props={props}/> 
        </div>
        
    )
}


export default ProfilePage