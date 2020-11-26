const { default: ProjectList } = require("../Project/ProjectList")
const { default: Notification } = require("./Notification")

const Dashboard = () => {
    return ( 
        <div className="dashboard container">
            <div className="row">
                <div className="col12 s12 m6">
                    <ProjectList />
                </div>
                <div className="col12 s12 m5 offset-m1">
                    <Notification />
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;