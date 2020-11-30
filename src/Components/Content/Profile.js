const { default: CreateProject } = require("../Project/CreateProject")

const Profile = () => {
    return ( 
        <div className="container">
            <CreateProject />
        </div>
     );
}
 
export default Profile;