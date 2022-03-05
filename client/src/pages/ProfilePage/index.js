import User from "../../components/User"

const ProfilePage = (props) => {
    return (
        <div>
            <h1>This is the ProfilePage</h1>
            <User props={props}/> 
        </div>
        
    )
}


export default ProfilePage