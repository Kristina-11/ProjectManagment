const { default: CreateProject } = require("../Project/CreateProject")

const Profile = (props) => {
    return ( 
        <div className="container">
            <CreateProject properties={props} />
            {/* Just logged in users tasks and options for editing and deleting */}
        </div>
     );
}
 
export default Profile;